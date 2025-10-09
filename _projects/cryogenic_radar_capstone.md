---
layout: page
title: Cryogenic FMCW RADAR Capstone
description: A senior design project exploring low-noise radar sensing at cryogenic temperatures through a custom FMCW radar board and cryostat integration.
img: assets/img/cryo_radar/image2.jpg
importance: 1
category: technical
related_publications: true
---

## Listening in the Cold: Building a Cryogenic FMCW Radar

This capstone project was led by **Team Domat** — Benjamin Chacko, Zachary Newsom, Bradley Schwans, and Anthony Jimenez — under the mentorship of **Dr. Subhanshu Gupta** and sponsorship of **Boeing** and the **WSU SoC Lab**:contentReference[oaicite:1]{index=1}.

Our goal was to design and build a **frequency-modulated continuous-wave (FMCW) radar** system capable of operating within the **ICE-T cryocooler**, enabling experiments on how cryogenic temperatures affect radar performance metrics such as **resolution** and **detection range**:contentReference[oaicite:2]{index=2}.

---

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/cryo_radar/image1.jpg" title="Custom 40 GHz Radar PCB" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/cryo_radar/image2.jpg" title="Cryostat Interface Setup" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  The radar board and cryostat interface. Our system was designed to operate down to ~77 K within the ICE-T cryocooler environment.
</div>

---

## Overview

The radar system was split into two main sections:
- **Front End:** A physical radar system capable of functioning at low temperature (fabricated around 40 GHz and 77 GHz chipsets).  
- **Back End:** Chirp synthesis and digital signal processing implemented on a **ZCU111 RFSoC** platform using **MATLAB/Simulink** models that compile directly to FPGA hardware.

The combination of these two allowed us to investigate **low-temperature noise reduction** and **range accuracy improvements** under cryogenic conditions.

---

## Antenna Design and Simulation

We designed a **3×4 microstrip patch antenna array** on an **8-mil Rogers 4003C substrate**, targeting the 40–44 GHz band:contentReference[oaicite:3]{index=3}.  

Using **Keysight ADS** and **EMPro**, we optimized for:
- S11 < −10 dB across the band  
- Impedance matching at 50 Ω  
- Peak gain ≈ 12.2 dBi and directivity ≈ 13.2 dBi  

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/cryo_radar/image8.png" title="ADS Far-Field Visualization of 3×4 Patch Array" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Fig 1. ADS far-field simulation of the 40–44 GHz patch antenna array, optimized for −10 dB return loss and 50 Ω impedance matching.
</div>

Further simulations in EMPro included **gold alloy top and bottom plates** to model the cryostat’s metallic enclosure:contentReference[oaicite:4]{index=4}, confirming stable impedance and gain even under constrained cavity conditions.

---

## Beta Prototype and Board Fabrication

Due to supply constraints at 77 GHz, we implemented **two radar architectures** — a primary 40 GHz system for testing and a secondary 77 GHz design for later comparison:contentReference[oaicite:5]{index=5}.

The 40 GHz board integrated:
- Up- and down-conversion modules  
- Microstrip patch array  
- RF interfaces for cryostat feedthroughs  
- Shielded regions for transmit/receive isolation  

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/cryo_radar/image12.png" title="Complete 40 GHz Radar Board" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Fig 4. Assembled 40 GHz radar board designed for cryogenic operation. Fabrication validated impedance control and thermal compatibility for testing inside the cryocooler.
</div>

Testing was scheduled roughly **3–4 weeks** after fabrication, allowing baseline validation at room temperature before cryogenic trials:contentReference[oaicite:6]{index=6}.

---

## Chirp Generation and Digital Backend

The digital subsystem, implemented on the **ZCU111 RFSoC**, used HDL-compatible MATLAB/Simulink blocks for chirp synthesis and FFT-based signal processing:contentReference[oaicite:7]{index=7}.  
Two chirp synthesis methods were evaluated:
1. **Memory-stored waveform samples**
2. **NCO direct digital synthesis (DDS)**  

Processing constraints of the ZCU111 required **parallelized data handling (≈ 8 samples per cycle)** to maintain real-time operation.

---

## Cryogenic and Broader Impacts

Cryogenic electronics are transforming **space exploration** and **quantum computing**, where reduced thermal noise improves detection of faint signals and stabilizes qubit coherence:contentReference[oaicite:8]{index=8}.

- The **James Webb Space Telescope** uses cryogenic sensors to detect deep-space infrared signals at ~7 K.  
- **Quantum processors** rely on similar cooling to maintain coherence near absolute zero.  

Our radar project contributes to this lineage — studying **how cryogenics enhance radar signal fidelity** and **open pathways for low-noise sensing** across research and industry.

<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/cryo_radar/image15.png" title="Cryogenic Radar Conceptual Model" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Concept illustration linking cryogenic radar technology to applications in astrophysics and quantum information science.
</div>

---

## Work Remaining and Next Steps

By the end of the semester, the team focused on:
- Completing **component characterization boards** under cryogenic conditions  
- Integrating the radar PCB with FPGA backend  
- Performing **room-temperature and cryogenic testing** to compare performance metrics:contentReference[oaicite:9]{index=9}  

The next milestones include full-system calibration, range testing, and eventual operation below 100 K to study noise suppression in real conditions.

---

## Acknowledgments

Special thanks to:
- **Dr. Subhanshu Gupta** (Mentor)  
- **Dr. Patrick Pedrow** (Instructor, EE 416)  
- **Boeing** and **WSU SoC Lab** (Sponsors)  
- Team Domat for design, simulation, and integration efforts  

---

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/cryo_radar/image22.jpg" title="Team Domat Capstone Poster" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Final project poster summarizing simulation, fabrication, and cryogenic testing for the Cryogenic FMCW Radar Capstone.
</div>

<!-- =========================
  INTERACTIVE 1: Chirp Playground
  Visualize TX/RX chirps, delay, and beat frequency
========================= -->
<h2 id="chirp-playground">Interactive: Chirp Playground</h2>
<p>Drag the distance, bandwidth, and sweep time. Watch the received (delayed) chirp and the resulting beat frequency.</p>

<div class="widget card">
  <div class="controls">
    <label>Target distance: <span id="dOut">2.0</span> m</label>
    <input id="dist" type="range" min="0.2" max="10" step="0.1" value="2">
    <label>Chirp bandwidth (B): <span id="bOut">4.0</span> GHz</label>
    <input id="bw" type="range" min="0.5" max="6" step="0.1" value="4">
    <label>Sweep time (T<sub>chirp</sub>): <span id="tOut">2.0</span> ms</label>
    <input id="tchirp" type="range" min="0.5" max="10" step="0.5" value="2">
  </div>
  <canvas id="chirpCanvas" width="900" height="240" style="width:100%;"></canvas>
  <div class="readouts">
    <div>Round-trip delay τ = <span id="tauOut"></span> μs</div>
    <div>Beat frequency f<sub>b</sub> ≈ <span id="fbOut"></span> kHz</div>
  </div>
</div>

<style>
  .card{border:1px solid #e6e6e6;border-radius:14px;padding:16px;margin:24px 0;background:#fff;box-shadow:0 8px 24px rgba(0,0,0,.04)}
  .controls{display:grid;grid-template-columns:1fr;gap:6px;margin-bottom:10px}
  .controls label{font-weight:600}
  .controls input{width:100%}
  .readouts{display:flex;gap:24px;margin-top:8px;font-weight:600}
  @media(min-width:720px){.controls{grid-template-columns:1fr 1fr}}
</style>

<script>
(() => {
  const c = document.getElementById('chirpCanvas');
  const ctx = c.getContext('2d');

  const dist = document.getElementById('dist');
  const bw   = document.getElementById('bw');
  const tC   = document.getElementById('tchirp');

  const dOut = document.getElementById('dOut');
  const bOut = document.getElementById('bOut');
  const tOut = document.getElementById('tOut');
  const tauOut = document.getElementById('tauOut');
  const fbOut  = document.getElementById('fbOut');

  const c0 = 299792458; // m/s speed of light

  function draw() {
    const d = parseFloat(dist.value);                 // meters
    const B = parseFloat(bw.value) * 1e9;            // Hz
    const T = parseFloat(tC.value) / 1000;           // seconds (ms -> s)
    const S = B / T;                                 // sweep slope (Hz/s)
    const tau = 2 * d / c0;                          // seconds
    const fb = S * tau;                              // Hz (beat frequency)

    // UI readouts
    dOut.textContent   = d.toFixed(1);
    bOut.textContent   = (B/1e9).toFixed(1);
    tOut.textContent   = (T*1000).toFixed(1);
    tauOut.textContent = (tau*1e6).toFixed(2);
    fbOut.textContent  = (fb/1e3).toFixed(2);

    // Canvas
    ctx.clearRect(0,0,c.width,c.height);
    // axes
    ctx.strokeStyle = '#aaa'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(50, 200); ctx.lineTo(860, 200); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(50, 30);  ctx.lineTo(50, 200);  ctx.stroke();
    ctx.fillStyle = '#555';
    ctx.fillText('time →', 820, 215);
    ctx.fillText('frequency', 10, 25);

    // map t in [0,T] across width
    const x0 = 50, x1 = 860, w = x1-x0, yTop = 40, yBot = 200;
    const fMin = 0, fMax = B; // show offset chirp only
    const fy = f => yBot - (f - fMin)/(fMax - fMin) * (yBot - yTop);
    const xt = t => x0 + (t/T) * w;

    // Transmit chirp (blue)
    ctx.strokeStyle = '#1479ff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let i=0;i<=200;i++){
      const t = (i/200)*T;
      const f = S*t;
      const x = xt(t), y = fy(f);
      if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
    }
    ctx.stroke(); ctx.fillStyle = '#1479ff'; ctx.fillText('TX chirp', x0+6, fy(0)+16);

    // Received chirp (orange, delayed by tau)
    ctx.strokeStyle = '#ff7a18';
    ctx.beginPath();
    for (let i=0;i<=200;i++){
      const t = (i/200)*T;
      const f = S*Math.max(0, t - tau); // delayed start
      const x = xt(t), y = fy(f);
      if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
    }
    ctx.stroke(); ctx.fillStyle = '#ff7a18'; ctx.fillText('RX chirp (delayed)', x0+6, fy(B*0.18)-8);

    // Beat frequency ruler
    const midT = T*0.7;
    const f_tx = S*midT;
    const f_rx = S*Math.max(0, midT - tau);
    const y_tx = fy(f_tx), y_rx = fy(f_rx);
    ctx.setLineDash([4,4]); ctx.strokeStyle='#444';
    ctx.beginPath(); ctx.moveTo(xt(midT), y_tx); ctx.lineTo(xt(midT), y_rx); ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle='#111';
    ctx.fillText(`|Δf| = f_b ≈ ${(fb/1e3).toFixed(2)} kHz`, xt(midT)-60, (y_tx+y_rx)/2 - 6);
  }

  ['input','change'].forEach(ev=>{
    dist.addEventListener(ev, draw);
    bw.addEventListener(ev, draw);
    tC.addEventListener(ev, draw);
  });

  draw();
})();
</script>


---
