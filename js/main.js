/* eslint-disable no-unused-vars */
import {checkValidity, inactivateForm} from './form.js';
import {sendData} from './apii.js';
import {resetMap} from './map.js';

checkValidity();

inactivateForm();

resetMap();

sendData();
