#!/usr/bin/env node

import functionGame from '../index';
import functions from '../even';

const { game } = functionGame;
const { instruction, even } = functions;

game(instruction, even);
