function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pages-info-info-module"],
  {
    /***/
    "./src/app/pages/info/info-routing.module.ts":
      /*!***************************************************!*\
    !*** ./src/app/pages/info/info-routing.module.ts ***!
    \***************************************************/

      /*! exports provided: InfoRoutingModule */

      /***/
      function srcAppPagesInfoInfoRoutingModuleTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "InfoRoutingModule",
          function() {
            return InfoRoutingModule;
          }
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */
          "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"
        );
        /* harmony import */

        var _info_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./info/info.component */
          "./src/app/pages/info/info/info.component.ts"
        );

        var routes = [
          {
            path: "",
            component:
              _info_info_component__WEBPACK_IMPORTED_MODULE_2__[
                "InfoComponent"
              ],
            data: {
              title: "ww.menu.info"
            }
          }
        ];

        var InfoRoutingModule = function InfoRoutingModule() {
          _classCallCheck(this, InfoRoutingModule);
        };

        InfoRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineNgModule"
        ]({
          type: InfoRoutingModule
        });
        InfoRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineInjector"
        ]({
          factory: function InfoRoutingModule_Factory(t) {
            return new (t || InfoRoutingModule)();
          },
          imports: [
            [
              _angular_router__WEBPACK_IMPORTED_MODULE_1__[
                "RouterModule"
              ].forChild(routes)
            ],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
          ]
        });

        (function() {
          (typeof ngJitMode === "undefined" || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](
              InfoRoutingModule,
              {
                imports: [
                  _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
                ],
                exports: [
                  _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
                ]
              }
            );
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            InfoRoutingModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
                args: [
                  {
                    imports: [
                      _angular_router__WEBPACK_IMPORTED_MODULE_1__[
                        "RouterModule"
                      ].forChild(routes)
                    ],
                    exports: [
                      _angular_router__WEBPACK_IMPORTED_MODULE_1__[
                        "RouterModule"
                      ]
                    ]
                  }
                ]
              }
            ],
            null,
            null
          );
        })();
        /***/
      },

    /***/
    "./src/app/pages/info/info.module.ts":
      /*!*******************************************!*\
    !*** ./src/app/pages/info/info.module.ts ***!
    \*******************************************/

      /*! exports provided: InfoModule */

      /***/
      function srcAppPagesInfoInfoModuleTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "InfoModule", function() {
          return InfoModule;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */
          "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"
        );
        /* harmony import */

        var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../shared/shared.module */
          "./src/app/shared/shared.module.ts"
        );
        /* harmony import */

        var _info_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./info/info.component */
          "./src/app/pages/info/info/info.component.ts"
        );
        /* harmony import */

        var _info_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./info-routing.module */
          "./src/app/pages/info/info-routing.module.ts"
        );

        var InfoModule = function InfoModule() {
          _classCallCheck(this, InfoModule);
        };

        InfoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineNgModule"
        ]({
          type: InfoModule
        });
        InfoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineInjector"
        ]({
          factory: function InfoModule_Factory(t) {
            return new (t || InfoModule)();
          },
          imports: [
            [
              _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
              _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__[
                "SharedModule"
              ],
              _info_routing_module__WEBPACK_IMPORTED_MODULE_4__[
                "InfoRoutingModule"
              ]
            ]
          ]
        });

        (function() {
          (typeof ngJitMode === "undefined" || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](
              InfoModule,
              {
                declarations: [
                  _info_info_component__WEBPACK_IMPORTED_MODULE_3__[
                    "InfoComponent"
                  ]
                ],
                imports: [
                  _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                  _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__[
                    "SharedModule"
                  ],
                  _info_routing_module__WEBPACK_IMPORTED_MODULE_4__[
                    "InfoRoutingModule"
                  ]
                ]
              }
            );
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            InfoModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
                args: [
                  {
                    declarations: [
                      _info_info_component__WEBPACK_IMPORTED_MODULE_3__[
                        "InfoComponent"
                      ]
                    ],
                    imports: [
                      _angular_common__WEBPACK_IMPORTED_MODULE_1__[
                        "CommonModule"
                      ],
                      _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__[
                        "SharedModule"
                      ],
                      _info_routing_module__WEBPACK_IMPORTED_MODULE_4__[
                        "InfoRoutingModule"
                      ]
                    ]
                  }
                ]
              }
            ],
            null,
            null
          );
        })();
        /***/
      },

    /***/
    "./src/app/pages/info/info/info.component.ts":
      /*!***************************************************!*\
    !*** ./src/app/pages/info/info/info.component.ts ***!
    \***************************************************/

      /*! exports provided: InfoComponent */

      /***/
      function srcAppPagesInfoInfoInfoComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "InfoComponent", function() {
          return InfoComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../environments/environment */
          "./src/environments/environment.ts"
        );
        /* harmony import */

        var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common/http */
          "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"
        );
        /* harmony import */

        var echarts_lib_chart_treemap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! echarts/lib/chart/treemap */
          "../../node_modules/echarts/lib/chart/treemap.js"
        );
        /* harmony import */

        var echarts_lib_chart_treemap__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/
          __webpack_require__.n(
            echarts_lib_chart_treemap__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */

        var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! rxjs/operators */
          "../../node_modules/rxjs/_esm2015/operators/index.js"
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @angular/common */
          "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"
        );
        /* harmony import */

        var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @angular/material/button */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js"
        );
        /* harmony import */

        var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @angular/material/icon */
          "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js"
        );
        /* harmony import */

        var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! @ngx-translate/core */
          "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js"
        );

        function InfoComponent_div_0_Template(rf, ctx) {
          if (rf & 1) {
            var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵgetCurrentView"
            ]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "div",
              1
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "button",
              2
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "click",
              function InfoComponent_div_0_Template_button_click_1_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r27
                );

                var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵnextContext"
                ]();

                return ctx_r26.exit();
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              2,
              "mat-icon",
              3
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              3,
              "highlight_off"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              4,
              "p",
              4
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](
              6,
              "translate"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              7,
              "em"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "really");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](
              10,
              "translate"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](
              11,
              "translate"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](
              12,
              "translate"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](
              "",
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
                6,
                4,
                "ww.language"
              ),
              " is "
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](
              " complex, and ",
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
                10,
                6,
                "ww.title"
              ),
              " is able to show a lot of that complexity. Give it a few seconds, but down below you will see a tiny dot appear named ",
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
                11,
                8,
                "ww.title"
              ),
              ". This is a tool that lets you explore all of the conjugations possible with ",
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](
                12,
                10,
                "ww.title"
              ),
              ". You can drag it around, click further and further into the model, and use your mouse to zoom in and out. You can close this instruction with the 'x' above. Have fun!"
            );
          }
        }

        var InfoComponent =
          /*#__PURE__*/
          (function() {
            function InfoComponent(http) {
              _classCallCheck(this, InfoComponent);

              this.http = http;
              this.instruction = true;
            }

            _createClass(InfoComponent, [
              {
                key: "ngOnInit",
                value: function ngOnInit() {
                  this.response = this.returnAllData();
                }
              },
              {
                key: "returnAllData",
                value: function returnAllData() {
                  return this.http
                    .get(
                      _environments_environment__WEBPACK_IMPORTED_MODULE_1__[
                        "environment"
                      ].base + "/static/web/assets/data.json"
                    )
                    .pipe(
                      Object(
                        rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"]
                      )(function(data) {
                        data = data;
                        var chartOption = {
                          tooltip: {
                            show: false,
                            trigger: "item",
                            triggerOn: "mousemove"
                          },
                          toolbox: {
                            feature: {
                              saveAsImage: {
                                title: "save",
                                show: false
                              }
                            }
                          },
                          series: [
                            {
                              type: "tree",
                              // label: {
                              //     color: '#fff'
                              // },
                              name: "Kawennon:nis",
                              data: data,
                              layout: "radial",
                              top: "20%",
                              // left: '0',
                              bottom: "40%",
                              // right: '0',
                              symbolSize: 7,
                              initialTreeDepth: 0,
                              expandAndCollapse: true,
                              roam: true,
                              animationDuration: 550,
                              animationDurationUpdate: 750
                            }
                          ]
                        };
                        return chartOption;
                      })
                    );
                }
              },
              {
                key: "exit",
                value: function exit() {
                  this.instruction = false;
                }
              }
            ]);

            return InfoComponent;
          })();

        InfoComponent.ɵfac = function InfoComponent_Factory(t) {
          return new (t || InfoComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
            )
          );
        };

        InfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: InfoComponent,
          selectors: [["ww-info"]],
          decls: 1,
          vars: 1,
          consts: [
            [
              "class",
              "overlay page__content vmargin-right-20 vmargin-left-20 abs",
              4,
              "ngIf"
            ],
            [
              1,
              "overlay",
              "page__content",
              "vmargin-right-20",
              "vmargin-left-20",
              "abs"
            ],
            [
              "mat-icon-button",
              "",
              1,
              "top-25",
              "exit",
              "float-right",
              3,
              "click"
            ],
            ["aria-label", "hide overlay"],
            [1, "margin-top-50"]
          ],
          template: function InfoComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                0,
                InfoComponent_div_0_Template,
                13,
                12,
                "div",
                0
              );
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngIf",
                ctx.instruction
              );
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]
          ],
          pipes: [
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]
          ],
          styles: [
            ".echart[_ngcontent-%COMP%] {\n  height: 100%;\n  min-height: 800px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waW5lYS93b3Jkd2VhdmVyLUdVSS9yZWZhY3Rvci9wcm9qZWN0cy93b3JkLXdlYXZlci9zcmMvYXBwL3BhZ2VzL2luZm8vaW5mby9pbmZvLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvd29yZC13ZWF2ZXIvc3JjL2FwcC9wYWdlcy9pbmZvL2luZm8vaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNDSiIsImZpbGUiOiJwcm9qZWN0cy93b3JkLXdlYXZlci9zcmMvYXBwL3BhZ2VzL2luZm8vaW5mby9pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVjaGFydCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDgwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufSIsIi5lY2hhcnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDgwMHB4O1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"
          ],
          changeDetection: 0
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            InfoComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "ww-info",
                    templateUrl: "./info.component.html",
                    styleUrls: ["./info.component.scss"],
                    changeDetection:
                      _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                        "ChangeDetectionStrategy"
                      ].OnPush
                  }
                ]
              }
            ],
            function() {
              return [
                {
                  type:
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__[
                      "HttpClient"
                    ]
                }
              ];
            },
            null
          );
        })();
        /***/
      }
  }
]);
//# sourceMappingURL=pages-info-info-module-es5.js.map