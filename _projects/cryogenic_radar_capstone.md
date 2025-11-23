---
layout: page
title: Cryogenic FMCW RADAR Capstone
description: A senior design project exploring low-noise radar sensing at cryogenic temperatures through a custom FMCW radar board and cryostat integration.
img: assets/img/cryo_radar/bench_and_testboards_2.jpg
importance: 1
category: technical
related_publications: true
chart:
  chartjs: true
---

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/cryo_radar/final_poster.png" title="Final capstone presentation poster" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
Final capstone presentation poster summarizing cryogenic testing, antenna and radar design, RFSoC and DSP. <a href="/assets/pdf/cryo_radar/final_poster.pdf">(PDF)</a>
</div>

---

## Listening in the Cold: Building a Cryogenic FMCW Radar

This capstone project was led by **Team Domat** — Benjamin Chacko, Zachary Newsom, Bradley Schwans, and Anthony Jimenez — under the mentorship of **Dr. Subhanshu Gupta** and sponsorship of **Boeing** and the **WSU SoC Lab**.

Our goal was to design and build a **frequency-modulated continuous-wave (FMCW) radar** system capable of operating within the **ICE-T cryocooler** (Integrated Cryogenic Electronics Test-Bed) down to **~4 Kelvin**, enabling experiments on how cryogenic temperatures affect radar performance metrics such as **resolution** and **detection range**.

The project was split into two halves: the cryogenic testing of multiple **commercial off-the-shelf (COTS)** components, followed by the design of the **cryogenic radar** board. The two phases were meant to supplement eachother, with the **radar board design phase** using built-up knowledge from the **cryo-characterization phase** to understand how different technologies behave in these extreme environments.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/cryo_radar/team_photo.jpg" title="Team photo" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
Team Photo. (Left to right) Zachary Newsom, Bradley Schwans, Benjamin Chacko, Anthony Jimenez.
</div>

---

## Cryogenic Characterization

The project's initial phase was to assist in Boeing's cryogenic research by having multiple **commercial off the shelf (COTS)** parts modeled, designed, and tested in deep cryogenic environment **(~4 Kelvin)** with the performance of the parts characterized and its behavior studied for applications such as **radar and satellite communications**.

We got an initial list of COTS components to test from Boeing and set out to create insightful **characterization tests** for each of them. We created a PCB for each component that would fit in our cryo-electronics testbed that **allowed multiple different characterization tests** to be performed in **different instrument wiring configurations** -- which was crucial as the cryochamber can take some time to cool down and heat back up safely. 

Inside the electrical cryoinserts we fit these boards into a **small variable-temperature-stage chamber**, meaning they needed to have certain dimensions and I/O specifications. We were only allowed to have components on the top side, allowing **thermocoupling** to the chamber on the bottom side. For our PCB specs, we used appropriate **surface finishes** and used previously **researched dielectrics and technologies for our passive components in the IC tests**. We also tested different passive component technologies on their own.


<div class="row justify-content-md-center align-items-center">
  <div class="col-sm-3 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/cryo_radar/isolated_ice-t.png" title="ICE-T cryo chamber" class="img-fluid" %}
  </div>
  <div class="col-sm-5 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/cryo_radar/cryo_cooler_stages.png" title="ICE-T cryocooler insert" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
ICE-T (Integrated Cryogenic Electronics Test-Bed) and the interior of a stock cryo-insert.
</div>

**TODO: Describe the testing process, starting from room temperature testing for comparison later, the connection process to the cryo-interface, etc.**

<div class="row justify-content-md-center">
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/cryo_radar/rt_testing.jpg" title="Room temperature testing" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/cryo_radar/cryochamber.jpg" title="ICE-T cryo chamber" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/cryo_radar/cryo_testing.jpg" title="Cryo temperature testing" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
(Left to right) Room temperature component testing. Top view of the ICE-T and its wiring interface. Cryogenic component testing set-up.
</div>

---

## Testing and Characterization

**The final results of each test can be read in the [master list here](/assets/data/cryo_radar/CryoTestingMasterList.xlsx)**. 

#### Component List
- **Thin Film Resistors**
- **SMD Capacitors** (various dielectrics including NP0/C0G)
- **GanFETs** (EPC2040, EPC2216, EPC2014C, EPC2055)
- **Precision Low-noise Op-amp** (LMP2022)
- **Voltage Regulator** (LT6654)
- **4-channel CMOS Switch** (TMUX1574)
- **Matched BJT Pair** (DMMT3904W)
- **Current Monitor** (ZXCT1009F)
- **Quad Bilateral Analog Switch** (CD4066)
- **Trimmer Potentiometers** (TC33X)

As you might expect, none of these components were intended to be used anywhere close to the temperatures we were subjecting them to. Typically, commercial component temperature grades fall under either commercial (0 °C to 70 °C), industrial (-40 °C to 85 °C) or military (-55 °C to 125 °C). That determines the temperature range that their datasheet specs should still be valid. But our goal was to disregard the datasheet entirely and see how low each one truly could go before totally breaking down.

Unfortunately, most of the commercial ICs didn't work at 4 Kelvin, which was the temperature we were instructed to test exclusively for by our industry sponsors. However, we had interesting behavior as we raised the temperature at our own discretion and found the **functional breakdown temperature** for most of the components. Each component had multiple tests that characterized different parts of its behavior that aren't covered in the master list, if you're interested in the details of an **individual component's cryogenic functionality** -- feel free to send me an **<a href="mailto:zachary.newsom1@gmail.com">email</a>**!


### Cryo-Tested Passives for Cryogenics

The most successful tests we had were of the different capacitor and resistor technologies. The summarized data for resistors and capacitors is below.

```chartjs
{
  "type": "bar",
  "data": {
    "labels": [
      "50 Ω Thin Film",
      "100 Ω Thin Film",
      "200 Ω Thin Film",
      "1000 Ω Thin Film",
      "4700 Ω Thin Film",
      "100 kΩ Thin Film"
    ],
    "datasets": [
      {
        "data": [
          1.02207686,
          7.09241279,
          0.70438145,
          0.2996988,
          0.29528084,
          0.85531959
        ],
        "axis": "y",
        "backgroundColor": "rgba(54, 162, 235, 0.6)",
        "borderColor": "rgba(54, 162, 235, 1)",
        "fill": false,
        "borderWidth": 1
      }
    ]
  },
  "options": {
    "scales": {
      "x": {
        "grid": {
          "offset": true
        }
      }
    },
    "indexAxis": "y",
    "elements": {
    },
    "responsive": true,
    "maintainAspectRatio": false,
    "plugins": {
      "title": {
        "display": true,
        "text": "Resistance Deviation from Nominal (%)"
      },
      "legend": {
        "display": false
      }
    }
  }
}
```


**TODO**

<div class="row justify-content-md-center">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/cryo_radar/cryo_passives.png" title="Cryo passives placeholder" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
</div>


---

## Cryogenic Characterization Test Boards

To evaluate component behavior at cryogenic temperatures for every component in the list, we developed a set of **cryogenic characterization test boards**. 


**Altium Design**
**Screenshots of all PCBs**

You can download all the Altium files used in this project, excluding the RADAR board, from my [Dropbox](https://www.dropbox.com/scl/fo/jyn1434i0h4bruzsmkzw3/ABfY9RkJvgftWPi5hLuV8p4?rlkey=o8zqyxut5zh4bua50pstkbmvz&st=162fhvwg&dl=0).

### LMP2022 Example

**TODO go over designing, including the decision to take out second op-amp from cryo, etc.**

To give an example, I will walk you through the test boards for the op amp we tested, **Texas Instruments' LMP2022**, a precision chopper amplifier with low input offset voltage and bias current stability.

The goal of these tests was to understand how parameters such as **input offset**, **input bias current**, and **DC open loop-gain** change as the **Device Under Test (DUT)** was gradually cooled down to 4 K. To make sure that the cryo-behavior of the DUT was isolated and the only thing being observed, I made the test into two PCBs: one room temperature board, one cryo temperature board. Thus, only the DUT and its immediate passive components were cooled, allowing accurate measurements unaffected by the drift or instability of the other electronics (i.e. an auxilary op amp and other passives). 

<div class="row justify-content-md-center align-items-center">
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/cryo_radar/lmp2022_cryo_altium.png" title="Cryogenic Temperature LMP2022 Board" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/cryo_radar/lmp2022_rt_altium.png" title="Room Temperature LMP2022 Board" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  (Left to right) The LMP2022 cryogenic temperature board. The LMP2022 room temperature board.
</div>

The cryogenic temperature board has the DUT and a few cryo-rated resistors and capacitors. Decoupling capacitors are added in the design on the power supply rails of the LMP2022 DUT, they are C0G MLCC caps (which have proven to be highly temperature stable down to 4K). Note the pin-out which uses the cryo insert I/O to connect to the room temperature board.

You can download the Altium files for this board and others in my [Dropbox](https://www.dropbox.com/scl/fo/jyn1434i0h4bruzsmkzw3/ABfY9RkJvgftWPi5hLuV8p4?rlkey=o8zqyxut5zh4bua50pstkbmvz&st=162fhvwg&dl=0).

Connecting to the room temperature board through the cryo-bed's I/O interface, we have the room temperature board with its testing circuitry and switches for changing around what characterization test can be performed. The testing circuitry itself took inspiration from an Analog Devices article by James M. Bryant titled "Simple Op Amp Measurements" describing how to test for several DC and AC characteristics with one relatively simple servo loop circuit. It can perform a variety of possible tests with different measurement/switch configurations.

<div class="row justify-content-md-center">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/cryo_radar/servo_loop_test.png" title="Servo Loop Test" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Image of the op amp measurement circuit from "Simple Op Amp Measurements" by James M. Bryant (Analog Dialogue 45-04).
</div>

The servo loop, supplied with the help of an auxiliary op amp, is meant to force a null at the amplifier's input. Essentially, this allows the amplifier under test to measure its own errors. The auxilary op amp acts as an integrator, establishing a stable feedback loop for the DUT with very high DC open-loop gain.

Before we put the boards in cryo, we always did the full suite of tests to get the DUT's characteristics at room temperature (and check if our boards work!)

<div class="row justify-content-md-center">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/cryo_radar/both_lmp2022_with_wires.jpg" title="LMP2022 Test Boards" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
LMP2022 Cryo and Room Temp Test Boards Connected for Configurable Testing
</div>

<div class="row justify-content-md-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/cryo_radar/room_temp_lmp2022.jpg" title="LMP2022 Test Boards" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/cryo_radar/cryo_lmp2022.jpg" title="LMP2022 Test Boards" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
(left) LMP2022 Room Temp Board Top View. (right) Cryo Temp Test Board Top View
</div>

We then 


---

## Original Abstract: [Design, Model, and Test Advanced Communication and Sensing Electronics at Temperatures near 4 Kelvin](/assets/pdf/cryo_radar/abstract_Domat.pdf)

**Project significance:**
Boeing is seeking to have Washington State University support its cryogenic research. Boeing seeks to have multiple commercial off the shelf (COTS) parts modeled, designed, and tested in deep cryogenic environment (~4 Kelvin) with the performance of the parts characterized and its behavior studied for applications such as radar and satellite communications.

**Tasks:** 
Boeing will provide an initial list of parts for selection starting with block-level specifications and gradually build towards a high-level application such as RADAR or Localization by the WSU Systems-on-Chip Lab. Upon a mutually agreed list, the team will then model and develop cryo-compatible printed-circuit boards under guidance of senior PhD students at the systems-on-chip lab. It is expected that there will be 3 or 4 different components selected, and equivalently integrated into the PCB in a stepwise approach. 

Post the cryo-characterization, the team will understand any non-ideal (unexpected) behaviors that will happen due to deep cryogenic operation (below 20K) to 4K. The study of these behaviors is expected to lead to new knowledge and application in the RADAR / Wireless communication domains. 

The team composition will benefit from being inter-disciplinary with students from different traits in EECS welcome to the proposed research and development effort. Ideally, the team members would have taken 300- and 400-level courses in: 
1. Signal Processing 
2. Digital Communications
3. Electromagnetics
4. Embedded Systems
5. Microelectronics

The selected member will also be working with both physical hardware (requiring bench testing in the electronics lab) as well as Matlab and C++/Python simulation software with interest in embedded systems, Altium (or alternative software for Printed Circuit Boards), Electromagnetic simulations (antenna and transmission line design). The team will validate the Cryoelectronics performance in room-temperature settings followed by a more comprehensive radio performance in deep cryogenic environments.

---

## Acknowledgments

Special thanks to:
- **Dr. Subhanshu Gupta** (Mentor)  
- **Dr. Patrick Pedrow** (Instructor, EE 416)  
- **Boeing** and **WSU SoC Lab** (Sponsors)  
- Team Domat for design, simulation, and integration efforts  

---

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
