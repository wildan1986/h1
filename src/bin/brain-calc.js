#!/usr/bin/env node

import functionGame from '../index';
import functions from '../calc';

const { game } = functionGame;
const { instruction, calc } = functions;

game(instruction, calc);
