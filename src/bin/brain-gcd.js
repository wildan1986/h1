#!/usr/bin/env node

import functionGame from '../index';
import functions from '../gcd';

const { game } = functionGame;
const { instruction, gcd } = functions;

game(instruction, gcd);
