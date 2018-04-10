'use strict';

import './scss/main.scss';
import { module } from 'angular';
import { list, say } from 'cowsay-browser';

const cowsayApp = module('cowsayApp', []);
cowsayApp.controller('CowsayController', ['$log', CowsayController]);

function CowsayController($log) {
  $log.debug('CowsayController');

  this.title = 'Moo York!!';
  this.history = [];

  list((err, cowfiles) => {
    this.cowfiles = cowfiles;
    this.current = this.cowfiles[0];
  });

  this.update = (input) => {
    $log.debug('cowsayCtrl.update()');
    return say({ text: input || 'mooo', f: this.current });
  };

  this.speak = (input) => {
    $log.debug('cowsayCtrl.speak()');
    this.spoken = this.update(input);
    this.history.push(this.spoken);
  };

  this.undo = () => {
    $log.debug('cowsayCtrl.undo()');
    this.history.pop();
    this.spoken = this.history[this.history.length - 1] || '';
  };
};