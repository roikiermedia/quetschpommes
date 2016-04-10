/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {

    }
};

app.initialize();

/*---*/

var sounds = [
  {
    name: "Abflexen geht immer",
    filename: "abflexen.mp3",
  },
  {
    name: "Besser als du",
    filename: "besserkann_als_du.mp3",
  },
  {
    name: "Ganz Genau",
    filename: "ganz_genau.mp3",
  },
  {
    name: "Arbeiten mit den Füßen",
    filename: "arbeiten_mit_füßen.mp3",
  },
  {
    name: "Landwirt ohne Kabelbinder",
    filename: "bauer_ohne_kabelbinder.mp3",
  },
  {
    name: "Gaffa schadet nie",
    filename: "bisschen_gaffa.mp3",
  },
  {
    name: "Höchste Stuffe",
    filename: "hoechste_stuffe.mp3",
  },
  {
    name: "Kabeltrommel",
    filename: "kabeltrommel.mp3",
  },
  {
    name: "Nanumeter",
    filename: "nanumeter.mp3",
  },
  {
    name: "Nicht mehr messen",
    filename: "nicht_mehr_messen.mp3",
  },
  {
    name: "Wenn ich ne Pflanze wäre",
    filename: "wenn_ich_ne_pflanze_waer.mp3",
  }
]

function playSound(id) {
  var sound = new Audio("./audio/" + sounds[id].filename);
  sound.play();
}
