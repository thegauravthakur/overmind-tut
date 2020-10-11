import { namespaced } from 'overmind/config';
import * as counter from './counter';
import * as test from './test';

export const config = namespaced({ counter, test });
