/*
 * Copyright 2014 Red Hat, Inc.
 *
 * Red Hat licenses this file to you under the Apache License, version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License.  You may obtain a copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

/** @module vertx-tcp-eventbus-bridge-js/tcp_event_bus_bridge */
var utils = require('vertx-js/util/utils');
var Vertx = require('vertx-js/vertx');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JTcpEventBusBridge = io.vertx.ext.eventbus.bridge.tcp.TcpEventBusBridge;
var NetServerOptions = io.vertx.core.net.NetServerOptions;
var BridgeOptions = io.vertx.ext.bridge.BridgeOptions;

/**
 TCP EventBus bridge for Vert.x

 @class
*/
var TcpEventBusBridge = function(j_val) {

  var j_tcpEventBusBridge = j_val;
  var that = this;

  /**
   Listen on specific port and bind to specific address

   @public
   @param port {number} tcp port 
   @param address {string} tcp address to the bind 
   @param handler {function} the result handler 
   @return {TcpEventBusBridge} self
   */
  this.listen = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_tcpEventBusBridge["listen()"]();
      return that;
    }  else if (__args.length === 1 && typeof __args[0] === 'function') {
      j_tcpEventBusBridge["listen(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        __args[0](utils.convReturnVertxGen(ar.result(), TcpEventBusBridge), null);
      } else {
        __args[0](null, ar.cause());
      }
    });
      return that;
    }  else if (__args.length === 1 && typeof __args[0] ==='number') {
      j_tcpEventBusBridge["listen(int)"](__args[0]);
      return that;
    }  else if (__args.length === 2 && typeof __args[0] ==='number' && typeof __args[1] === 'string') {
      j_tcpEventBusBridge["listen(int,java.lang.String)"](__args[0], __args[1]);
      return that;
    }  else if (__args.length === 2 && typeof __args[0] ==='number' && typeof __args[1] === 'function') {
      j_tcpEventBusBridge["listen(int,io.vertx.core.Handler)"](__args[0], function(ar) {
      if (ar.succeeded()) {
        __args[1](utils.convReturnVertxGen(ar.result(), TcpEventBusBridge), null);
      } else {
        __args[1](null, ar.cause());
      }
    });
      return that;
    }  else if (__args.length === 3 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      j_tcpEventBusBridge["listen(int,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], function(ar) {
      if (ar.succeeded()) {
        __args[2](utils.convReturnVertxGen(ar.result(), TcpEventBusBridge), null);
      } else {
        __args[2](null, ar.cause());
      }
    });
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Close the current socket.

   @public
   @param handler {function} the result handler 
   */
  this.close = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_tcpEventBusBridge["close()"]();
    }  else if (__args.length === 1 && typeof __args[0] === 'function') {
      j_tcpEventBusBridge["close(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        __args[0](null, null);
      } else {
        __args[0](null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_tcpEventBusBridge;
};

/**

 @memberof module:vertx-tcp-eventbus-bridge-js/tcp_event_bus_bridge
 @param vertx {Vertx} 
 @param options {Object} 
 @param netServerOptions {Object} 
 @return {TcpEventBusBridge}
 */
TcpEventBusBridge.create = function() {
  var __args = arguments;
  if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
    return utils.convReturnVertxGen(JTcpEventBusBridge["create(io.vertx.core.Vertx)"](__args[0]._jdel), TcpEventBusBridge);
  }else if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && (typeof __args[1] === 'object' && __args[1] != null)) {
    return utils.convReturnVertxGen(JTcpEventBusBridge["create(io.vertx.core.Vertx,io.vertx.ext.bridge.BridgeOptions)"](__args[0]._jdel, __args[1] != null ? new BridgeOptions(new JsonObject(JSON.stringify(__args[1]))) : null), TcpEventBusBridge);
  }else if (__args.length === 3 && typeof __args[0] === 'object' && __args[0]._jdel && (typeof __args[1] === 'object' && __args[1] != null) && (typeof __args[2] === 'object' && __args[2] != null)) {
    return utils.convReturnVertxGen(JTcpEventBusBridge["create(io.vertx.core.Vertx,io.vertx.ext.bridge.BridgeOptions,io.vertx.core.net.NetServerOptions)"](__args[0]._jdel, __args[1] != null ? new BridgeOptions(new JsonObject(JSON.stringify(__args[1]))) : null, __args[2] != null ? new NetServerOptions(new JsonObject(JSON.stringify(__args[2]))) : null), TcpEventBusBridge);
  } else throw new TypeError('function invoked with invalid arguments');
};

// We export the Constructor function
module.exports = TcpEventBusBridge;