/**
 * Realistic Web Audio Synthesizer for Voiceover and Showreel Samples.
 * Generates rich, speech-like vocal harmonic resonances and warm studio-quality
 * ambient sweeps with interactive scrubbing, volume, and waveform visualization.
 */

class AudioSynthesizerEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private currentSourceNodes: {
    osc1?: OscillatorNode;
    osc2?: OscillatorNode;
    filter?: BiquadFilterNode;
    gainNode?: GainNode;
    lfo?: OscillatorNode;
  } = {};
  private isRunning: boolean = false;
  private volume: number = 0.8;
  private playbackRate: number = 1.0;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setVolume(val: number) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.05);
    }
  }

  public setPlaybackRate(rate: number) {
    this.playbackRate = rate;
  }

  public startPreview(category: string) {
    this.initContext();
    if (!this.ctx || !this.masterGain) return;
    this.stop();

    const t = this.ctx.currentTime;

    // Pitch & timbre selection based on track category
    let baseFreq = 120; // warm baritone fundamental
    let formantFreq = 850;

    if (category === 'character') {
      baseFreq = 85; // deep raspy warrior
      formantFreq = 620;
    } else if (category === 'commercial') {
      baseFreq = 130; // crisp broadcast
      formantFreq = 1100;
    } else if (category === 'corporate') {
      baseFreq = 145; // clear articulate
      formantFreq = 1350;
    } else {
      // narration
      baseFreq = 110;
      formantFreq = 780;
    }

    // Oscillator 1: Fundamental vocal resonance (Sawtooth softened)
    const osc1 = this.ctx.createOscillator();
    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(baseFreq * this.playbackRate, t);

    // Oscillator 2: Warm sub-harmonic octave
    const osc2 = this.ctx.createOscillator();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime((baseFreq * 0.5) * this.playbackRate, t);

    // Subtle human speech inflection LFO
    const lfo = this.ctx.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.setValueAtTime(0.8, t);
    const lfoGain = this.ctx.createGain();
    lfoGain.gain.setValueAtTime(4.5, t);
    lfo.connect(lfoGain);
    lfoGain.connect(osc1.frequency);

    // Formant filter (emulates vocal tract acoustics)
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(formantFreq, t);
    filter.Q.setValueAtTime(3.2, t);

    // Dynamic gain envelope
    const gainNode = this.ctx.createGain();
    gainNode.gain.setValueAtTime(0.001, t);
    gainNode.gain.exponentialRampToValueAtTime(0.18, t + 0.15);

    // Route audio graph
    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(this.masterGain);

    osc1.start(t);
    osc2.start(t);
    lfo.start(t);

    this.currentSourceNodes = { osc1, osc2, filter, gainNode, lfo };
    this.isRunning = true;
  }

  public stop() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    if (this.currentSourceNodes.gainNode) {
      try {
        this.currentSourceNodes.gainNode.gain.setTargetAtTime(0.0001, t, 0.05);
      } catch {
        // ignore
      }
    }
    setTimeout(() => {
      try {
        this.currentSourceNodes.osc1?.stop();
        this.currentSourceNodes.osc2?.stop();
        this.currentSourceNodes.lfo?.stop();
        this.currentSourceNodes.osc1?.disconnect();
        this.currentSourceNodes.osc2?.disconnect();
        this.currentSourceNodes.filter?.disconnect();
      } catch {
        // ignore
      }
      this.currentSourceNodes = {};
      this.isRunning = false;
    }, 80);
  }

  public getIsRunning() {
    return this.isRunning;
  }
}

export const audioSynthesizer = new AudioSynthesizerEngine();
