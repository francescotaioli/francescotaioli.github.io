---
layout: post
title:  "I2EDL: Interactive Instruction Error Detection and Localization"
date:   2024-06-01 17:41:26 +0200
categories: Computer Vision
conference: RO-MAN 24
authors: <b>Francesco Taioli</b>, et al.
---

<b><a href="https://arxiv.org/abs/2406.05080">ArXiv link</a></b> <br> 

In the Vision-and-Language Navigation in Continuous Environments (VLN-CE) task, the human user guides an autonomous agent to reach a target goal via a series of low-level actions following a textual instruction in natural language. However, most existing methods do not address the likely case where users may make mistakes when providing such instruction (e.g. "turn left" instead of "turn right"). In this work, we address a novel task of Interactive VLN in Continuous Environments (IVLN-CE), which allows the agent to interact with the user during the VLN-CE navigation to verify any doubts regarding the instruction errors. We propose an Interactive Instruction Error Detector and Localizer (I2EDL) that triggers the user-agent interaction upon the detection of instruction errors during the navigation. We leverage a pre-trained module to detect instruction errors and pinpoint them in the instruction by cross-referencing the textual input and past observations. In such way, the agent is able to query the user for a timely correction, without demanding the user's cognitive load, as we locate the probable errors to a precise part of the instruction. We evaluate the proposed I2EDL on a dataset of instructions containing errors, and further devise a novel metric, the Success weighted by Interaction Number (SIN), to reflect both the navigation performance and the interaction effectiveness. We show how the proposed method can ask focused requests for corrections to the user, which in turn increases the navigation success, while minimizing the interactions.