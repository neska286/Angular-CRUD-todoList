function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/_modal/index.ts":
  /*!*********************************!*\
    !*** ./src/app/_modal/index.ts ***!
    \*********************************/

  /*! exports provided: ModalModule, ModalService */

  /***/
  function srcApp_modalIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _modal_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./modal.module */
    "./src/app/_modal/modal.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ModalModule", function () {
      return _modal_module__WEBPACK_IMPORTED_MODULE_0__["ModalModule"];
    });
    /* harmony import */


    var _modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./modal.service */
    "./src/app/_modal/modal.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ModalService", function () {
      return _modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"];
    });
    /***/

  },

  /***/
  "./src/app/_modal/modal.component.ts":
  /*!*******************************************!*\
    !*** ./src/app/_modal/modal.component.ts ***!
    \*******************************************/

  /*! exports provided: ModalComponent */

  /***/
  function srcApp_modalModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalComponent", function () {
      return ModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./modal.service */
    "./src/app/_modal/modal.service.ts");
    /* harmony import */


    var _services_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/todo.service */
    "./src/app/services/todo.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ModalComponent_div_15_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter the text of your edit todo ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ModalComponent_div_15_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Todo text must be at least 2 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ModalComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModalComponent_div_15_p_1_Template, 2, 0, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ModalComponent_div_15_p_2_Template, 2, 0, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.minlength);
      }
    }

    var ModalComponent = /*#__PURE__*/function () {
      function ModalComponent(modalService, el, todoService) {
        _classCallCheck(this, ModalComponent);

        this.modalService = modalService;
        this.el = el;
        this.todoService = todoService;
        this.showValidationErrors = false; // onEditToDo(){
        //    this.todoService.update()
        // }

        this.updateModel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.element = el.nativeElement;
      }

      _createClass(ModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // ensure id attribute exists
          if (!this.id) {
            console.error('modal must have an id');
            return;
          } // move element to bottom of page (just before </body>) so it can be displayed above everything else


          document.body.appendChild(this.element); // close modal on background click

          this.element.addEventListener('click', function (el) {
            if (el.target.className === 'jw-modal') {
              _this.close();
            }
          }); // add self (this modal instance) to the modal service so it's accessible from controllers

          this.modalService.add(this);
        } // remove self from modal service when component is destroyed

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.modalService.remove(this.id);
          this.element.remove();
        } // open modal

      }, {
        key: "open",
        value: function open() {
          this.element.style.display = 'block';
          document.body.classList.add('jw-modal-open');
        } // close modal

      }, {
        key: "close",
        value: function close() {
          this.element.style.display = 'none';
          document.body.classList.remove('jw-modal-open');
        }
      }, {
        key: "updateTodo",
        value: function updateTodo(form) {
          if (form.invalid) return this.showValidationErrors = true;
          this.updateModel.emit(form.value.title);
          form.reset();
        }
      }, {
        key: "closeModal",
        value: function closeModal(id) {
          this.modalService.close(id);
        }
      }]);

      return ModalComponent;
    }();

    ModalComponent.ɵfac = function ModalComponent_Factory(t) {
      return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]));
    };

    ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ModalComponent,
      selectors: [["jw-modal"]],
      inputs: {
        id: "id"
      },
      outputs: {
        updateModel: "updateModel"
      },
      decls: 17,
      vars: 1,
      consts: [[1, "jw-modal"], [1, "jw-modal-body"], [1, "container-section"], [1, "add-todo-box"], [1, "row"], [3, "click"], [1, "fas", "fa-times"], [3, "ngSubmit"], ["form", "ngForm"], ["ngModel", "", "name", "title", "minlength", "3", "type", "text", "placeholder", "Update Your todo", "required", "", 1, "input"], ["todoTextField", "ngModel"], ["type", "submit", 1, "btn", "btn-add"], [1, "fas", "fa-plus"], [4, "ngIf"], [1, "jw-modal-background"], ["class", "help is-danger", 4, "ngIf"], [1, "help", "is-danger"]],
      template: function ModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "UpdateTodo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_a_click_7_listener() {
            return ctx.closeModal("custom-modal-1");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ModalComponent_Template_form_ngSubmit_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

            return ctx.updateTodo(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ModalComponent_div_15_Template, 3, 2, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 14);
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid && ctx.showValidationErrors);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: ["/* MODAL STYLES\n-------------------------------*/\njw-modal {\n  /* modals are hidden by default */\n  display: none;\n}\njw-modal .jw-modal {\n  /* modal container fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* z-index must be higher than .jw-modal-background */\n  z-index: 1000;\n  /* enables scrolling for tall modals */\n  overflow: auto;\n}\njw-modal .jw-modal .jw-modal-body {\n  padding: 20px;\n  background: #fff;\n  /* margin exposes part of the modal background */\n  margin: 40px auto;\n  width: 25%;\n}\njw-modal .jw-modal .jw-modal-body form {\n  text-align: center;\n}\njw-modal .jw-modal-background {\n  /* modal background fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* semi-transparent black  */\n  background-color: #000;\n  opacity: 0.75;\n  /* z-index must be below .jw-modal and above everything else  */\n  z-index: 900;\n}\nbody.jw-modal-open {\n  /* body overflow is hidden to hide main scrollbar when modal window is open */\n  overflow: hidden;\n}\n.fa-times {\n  font-size: 1.6rem;\n  color: #004e75;\n}\ninput[type=\"text\"] {\n  height: 3rem;\n  padding: 0.5rem;\n  font-size: 1.5rem;\n  box-sizing: border-box;\n  width: calc(100% - 63px);\n}\n:focus {\n  outline-color: transparent;\n  outline-style: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX21vZGFsL21vZGFsLmNvbXBvbmVudC5sZXNzIiwiL1VzZXJzL25lcm1lbnllaGlhL0Rlc2t0b3AvQW5ndWxhci1DUlVELXRvZG9saXN0L3NyYy9hcHAvX21vZGFsL21vZGFsLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO2dDQUNnQztBQ0VoQztFREFFLGlDQUFpQztFQ0UvQixhQUFBO0FEQUo7QUNGQTtFRElFLDhDQUE4QztFQ0V4QyxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFREFOLHFEQUFxRDtFQ0cvQyxhQUFBO0VERE4sc0NBQXNDO0VDSWhDLGNBQUE7QURGUjtBQ2RBO0VBbUJZLGFBQUE7RUFDQSxnQkFBQTtFREZWLGdEQUFnRDtFQ0t0QyxpQkFBQTtFQUNBLFVBQUE7QURIWjtBQ3JCQTtFQTBCZ0Isa0JBQUE7QURGaEI7QUN4QkE7RUQwQkUsK0NBQStDO0VDU3pDLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VEUE4sNEJBQTRCO0VDVXRCLHNCQUFBO0VBQ0EsYUFBQTtFRFJOLCtEQUErRDtFQ1d6RCxZQUFBO0FEVFI7QUNhQTtFRFhFLDZFQUE2RTtFQ2EzRSxnQkFBQTtBRFhKO0FDYUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QURYSjtBQ2FBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7QURYSjtBQ2FFO0VBQ0UsMEJBQUE7RUFDQSxtQkFBQTtBRFhKIiwiZmlsZSI6InNyYy9hcHAvX21vZGFsL21vZGFsLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTU9EQUwgU1RZTEVTXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmp3LW1vZGFsIHtcbiAgLyogbW9kYWxzIGFyZSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xuICBkaXNwbGF5OiBub25lO1xufVxuanctbW9kYWwgLmp3LW1vZGFsIHtcbiAgLyogbW9kYWwgY29udGFpbmVyIGZpeGVkIGFjcm9zcyB3aG9sZSBzY3JlZW4gKi9cbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIC8qIHotaW5kZXggbXVzdCBiZSBoaWdoZXIgdGhhbiAuanctbW9kYWwtYmFja2dyb3VuZCAqL1xuICB6LWluZGV4OiAxMDAwO1xuICAvKiBlbmFibGVzIHNjcm9sbGluZyBmb3IgdGFsbCBtb2RhbHMgKi9cbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5qdy1tb2RhbCAuanctbW9kYWwgLmp3LW1vZGFsLWJvZHkge1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAvKiBtYXJnaW4gZXhwb3NlcyBwYXJ0IG9mIHRoZSBtb2RhbCBiYWNrZ3JvdW5kICovXG4gIG1hcmdpbjogNDBweCBhdXRvO1xuICB3aWR0aDogMjUlO1xufVxuanctbW9kYWwgLmp3LW1vZGFsIC5qdy1tb2RhbC1ib2R5IGZvcm0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5qdy1tb2RhbCAuanctbW9kYWwtYmFja2dyb3VuZCB7XG4gIC8qIG1vZGFsIGJhY2tncm91bmQgZml4ZWQgYWNyb3NzIHdob2xlIHNjcmVlbiAqL1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgLyogc2VtaS10cmFuc3BhcmVudCBibGFjayAgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgb3BhY2l0eTogMC43NTtcbiAgLyogei1pbmRleCBtdXN0IGJlIGJlbG93IC5qdy1tb2RhbCBhbmQgYWJvdmUgZXZlcnl0aGluZyBlbHNlICAqL1xuICB6LWluZGV4OiA5MDA7XG59XG5ib2R5Lmp3LW1vZGFsLW9wZW4ge1xuICAvKiBib2R5IG92ZXJmbG93IGlzIGhpZGRlbiB0byBoaWRlIG1haW4gc2Nyb2xsYmFyIHdoZW4gbW9kYWwgd2luZG93IGlzIG9wZW4gKi9cbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5mYS10aW1lcyB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBjb2xvcjogIzAwNGU3NTtcbn1cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgaGVpZ2h0OiAzcmVtO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogY2FsYygxMDAlIC0gNjNweCk7XG59XG46Zm9jdXMge1xuICBvdXRsaW5lLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgb3V0bGluZS1zdHlsZTogbm9uZTtcbn1cbiIsIlxuLyogTU9EQUwgU1RZTEVTXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmp3LW1vZGFsIHtcbiAgICAvKiBtb2RhbHMgYXJlIGhpZGRlbiBieSBkZWZhdWx0ICovXG4gICAgZGlzcGxheTogbm9uZTtcblxuICAgIC5qdy1tb2RhbCB7XG4gICAgICAgIC8qIG1vZGFsIGNvbnRhaW5lciBmaXhlZCBhY3Jvc3Mgd2hvbGUgc2NyZWVuICovXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuXG4gICAgICAgIC8qIHotaW5kZXggbXVzdCBiZSBoaWdoZXIgdGhhbiAuanctbW9kYWwtYmFja2dyb3VuZCAqL1xuICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgICBcbiAgICAgICAgLyogZW5hYmxlcyBzY3JvbGxpbmcgZm9yIHRhbGwgbW9kYWxzICovXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuXG4gICAgICAgIC5qdy1tb2RhbC1ib2R5IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuXG4gICAgICAgICAgICAvKiBtYXJnaW4gZXhwb3NlcyBwYXJ0IG9mIHRoZSBtb2RhbCBiYWNrZ3JvdW5kICovXG4gICAgICAgICAgICBtYXJnaW46IDQwcHggYXV0bztcbiAgICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgICBmb3JtIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgXG4gICAgICAgIFxuICAgIH1cblxuICAgIC5qdy1tb2RhbC1iYWNrZ3JvdW5kIHtcbiAgICAgICAgLyogbW9kYWwgYmFja2dyb3VuZCBmaXhlZCBhY3Jvc3Mgd2hvbGUgc2NyZWVuICovXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuXG4gICAgICAgIC8qIHNlbWktdHJhbnNwYXJlbnQgYmxhY2sgICovXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgICAgIFxuICAgICAgICAvKiB6LWluZGV4IG11c3QgYmUgYmVsb3cgLmp3LW1vZGFsIGFuZCBhYm92ZSBldmVyeXRoaW5nIGVsc2UgICovXG4gICAgICAgIHotaW5kZXg6IDkwMDtcbiAgICB9XG59XG5cbmJvZHkuanctbW9kYWwtb3BlbiB7XG4gICAgLyogYm9keSBvdmVyZmxvdyBpcyBoaWRkZW4gdG8gaGlkZSBtYWluIHNjcm9sbGJhciB3aGVuIG1vZGFsIHdpbmRvdyBpcyBvcGVuICovXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5mYS10aW1lcyB7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgY29sb3I6IzAwNGU3NTtcbn1cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYzcHgpO1xuICB9XG4gIDpmb2N1cyB7XG4gICAgb3V0bGluZS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgb3V0bGluZS1zdHlsZTogbm9uZTtcbiAgfVxuXG4iXX0= */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'jw-modal',
          templateUrl: 'modal.component.html',
          styleUrls: ['modal.component.less'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]
        }];
      }, {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        updateModel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/_modal/modal.module.ts":
  /*!****************************************!*\
    !*** ./src/app/_modal/modal.module.ts ***!
    \****************************************/

  /*! exports provided: ModalModule */

  /***/
  function srcApp_modalModalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalModule", function () {
      return ModalModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./modal.component */
    "./src/app/_modal/modal.component.ts");

    var ModalModule = /*#__PURE__*/_createClass(function ModalModule() {
      _classCallCheck(this, ModalModule);
    });

    ModalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ModalModule
    });
    ModalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ModalModule_Factory(t) {
        return new (t || ModalModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ModalModule, {
        declarations: [_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
        exports: [_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
          declarations: [_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"]],
          exports: [_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/_modal/modal.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/_modal/modal.service.ts ***!
    \*****************************************/

  /*! exports provided: ModalService */

  /***/
  function srcApp_modalModalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalService", function () {
      return ModalService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ModalService = /*#__PURE__*/function () {
      function ModalService() {
        _classCallCheck(this, ModalService);

        this.modals = [];
      }

      _createClass(ModalService, [{
        key: "add",
        value: function add(modal) {
          // add modal to array of active modals
          this.modals.push(modal);
        }
      }, {
        key: "remove",
        value: function remove(id) {
          // remove modal from array of active modals
          this.modals = this.modals.filter(function (x) {
            return x.id !== id;
          });
        }
      }, {
        key: "open",
        value: function open(id) {
          // open modal specified by id
          var modal = this.modals.find(function (x) {
            return x.id === id;
          });
          modal.open();
        }
      }, {
        key: "close",
        value: function close(id) {
          // close modal specified by id
          var modal = this.modals.find(function (x) {
            return x.id === id;
          });
          modal.close();
        }
      }]);

      return ModalService;
    }();

    ModalService.ɵfac = function ModalService_Factory(t) {
      return new (t || ModalService)();
    };

    ModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ModalService,
      factory: ModalService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _component_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./component/todo-list/todo-list.component */
    "./src/app/component/todo-list/todo-list.component.ts");

    var routes = [{
      path: '',
      component: _component_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_2__["TodoListComponent"]
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'angular-todo-app';
    });

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _component_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./component/todo-item/todo-item.component */
    "./src/app/component/todo-item/todo-item.component.ts");
    /* harmony import */


    var _component_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./component/header/header.component */
    "./src/app/component/header/header.component.ts");
    /* harmony import */


    var _component_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./component/todo-list/todo-list.component */
    "./src/app/component/todo-list/todo-list.component.ts");
    /* harmony import */


    var _modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./_modal */
    "./src/app/_modal/index.ts");
    /* harmony import */


    var _fliter_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./fliter.pipe */
    "./src/app/fliter.pipe.ts");
    /* harmony import */


    var _component_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./component/drop-down/drop-down.component */
    "./src/app/component/drop-down/drop-down.component.ts");
    /* harmony import */


    var _interceptor_language_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./interceptor/language-interceptor */
    "./src/app/interceptor/language-interceptor.ts");

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useClass: _interceptor_language_interceptor__WEBPACK_IMPORTED_MODULE_12__["LanguageInterceptor"],
        multi: true
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _component_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_6__["TodoItemComponent"], _component_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _component_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_8__["TodoListComponent"], _fliter_pipe__WEBPACK_IMPORTED_MODULE_10__["FilterPipe"], _component_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_11__["DropDownComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _component_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_6__["TodoItemComponent"], _component_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _component_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_8__["TodoListComponent"], _fliter_pipe__WEBPACK_IMPORTED_MODULE_10__["FilterPipe"], _component_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_11__["DropDownComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"]],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: _interceptor_language_interceptor__WEBPACK_IMPORTED_MODULE_12__["LanguageInterceptor"],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/component/drop-down/drop-down.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/component/drop-down/drop-down.component.ts ***!
    \************************************************************/

  /*! exports provided: DropDownComponent */

  /***/
  function srcAppComponentDropDownDropDownComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropDownComponent", function () {
      return DropDownComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var DropDownComponent = /*#__PURE__*/function () {
      function DropDownComponent() {
        _classCallCheck(this, DropDownComponent);
      }

      _createClass(DropDownComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.lang = localStorage.getItem('lang') || 'en';
        }
      }, {
        key: "changeLanguage",
        value: function changeLanguage(lang) {
          console.log(lang);
          localStorage.setItem('lang', lang);
          window.location.reload();
        }
      }]);

      return DropDownComponent;
    }();

    DropDownComponent.ɵfac = function DropDownComponent_Factory(t) {
      return new (t || DropDownComponent)();
    };

    DropDownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DropDownComponent,
      selectors: [["app-drop-down"]],
      decls: 8,
      vars: 2,
      consts: [[1, "section"], [2, "font-weight", "bold"], [3, "change"], ["value", "en", 3, "selected"], ["value", "ar", 3, "selected"]],
      template: function DropDownComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select a Language");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DropDownComponent_Template_select_change_3_listener($event) {
            return ctx.changeLanguage($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "English");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Arabic");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx.lang == "en");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx.lang == "ar");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9kcm9wLWRvd24vZHJvcC1kb3duLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropDownComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-drop-down',
          templateUrl: './drop-down.component.html',
          styleUrls: ['./drop-down.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/component/header/header.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/component/header/header.component.ts ***!
    \******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 15,
      vars: 0,
      consts: [[1, "header"], [1, "col-6", "header--background"], [1, "header--text-box"], [1, "row"], [1, "col-7"], [1, "header--text-box-primary"], [1, "col-5"], [1, "header--text-box-logo"], [1, "fab", "fa-twitter"], ["src", "assets/img/qrcode.png", "alt", "", 1, "qr-code"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Task Managment System");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "staff management");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".header[_ngcontent-%COMP%] {\n  position: relative;\n}\n.header--background[_ngcontent-%COMP%] {\n  background-color: #02b0ab;\n  height: 20vh;\n  -webkit-clip-path: polygon(0 0, 100% 0, 40% 70vh, 0 100%);\n          clip-path: polygon(0 0, 100% 0, 40% 70vh, 0 100%);\n}\n.header--text-box[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  bottom: 25%;\n}\n.header--text-box-primary[_ngcontent-%COMP%] {\n  background-color: #004e75;\n  height: 10vh;\n  -webkit-clip-path: polygon(0 0, 100% 0, 40% 70vh, 0 100%);\n          clip-path: polygon(0 0, 100% 0, 40% 70vh, 0 100%);\n  color: #fff;\n  display: grid;\n  justify-content: center;\n  align-content: center;\n}\n@media (max-width: 600px) {\n  .header--text-box-primary[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n.header--text-box-logo[_ngcontent-%COMP%] {\n  background-color: #f9f9f9;\n  height: 10vh;\n  -webkit-clip-path: polygon(12% 0, 100% 0, 100% 70vh, 0 100%);\n          clip-path: polygon(12% 0, 100% 0, 100% 70vh, 0 100%);\n  color: #02b0ab;\n  display: grid;\n  justify-content: center;\n  align-content: center;\n}\n@media (max-width: 600px) {\n  .header--text-box-logo[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n.header[_ngcontent-%COMP%]   .qr-code[_ngcontent-%COMP%] {\n  width: 9.2rem;\n  height: 9.2rem;\n  background: white;\n  padding: 2px;\n  position: absolute;\n  z-index: 4;\n  top: 50%;\n  left: 11%;\n}\n@media (max-width: 600px) {\n  .header[_ngcontent-%COMP%]   .qr-code[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .header[_ngcontent-%COMP%]   .qr-code[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .header[_ngcontent-%COMP%]   .qr-code[_ngcontent-%COMP%] {\n    width: 6rem;\n    height: 6rem;\n  }\n}\n.header[_ngcontent-%COMP%]   .fa-twitter[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: center;\n  align-content: center;\n  background-color: #004e75;\n  padding: 1rem;\n  border-radius: 0.5rem;\n  margin-left: 1rem;\n  color: #fff;\n}\n@media (max-width: 600px) {\n  .header[_ngcontent-%COMP%]   .fa-twitter[_ngcontent-%COMP%] {\n    margin-left: 0rem;\n    padding: 0.4rem;\n  }\n}\n.header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n@media (max-width: 600px) {\n  .header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 0.2rem;\n    font-size: 1.3rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZXJtZW55ZWhpYS9EZXNrdG9wL0FuZ3VsYXItQ1JVRC10b2RvbGlzdC9zcmMvYXBwL2NvbXBvbmVudC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9uZXJtZW55ZWhpYS9EZXNrdG9wL0FuZ3VsYXItQ1JVRC10b2RvbGlzdC9zdHlsZXMvX2NvbG9ycy5zY3NzIiwiL1VzZXJzL25lcm1lbnllaGlhL0Rlc2t0b3AvQW5ndWxhci1DUlVELXRvZG9saXN0L3N0eWxlcy9fbWl4aW5pcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JBQUE7QUNESjtBREVJO0VBQ0UseUJFRlc7RUZHWCxZQUFBO0VBQ0EseURBQUE7VUFBQSxpREFBQTtBQ0FOO0FERUk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDQU47QURDTTtFQUNFLHlCRVpRO0VGYVIsWUFBQTtFQUNBLHlEQUFBO1VBQUEsaURBQUE7RUFDQSxXRVRNO0VGVU4sYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUNDUjtBRW5CUTtFSFdGO0lBU0ksaUJBQUE7RUNHUjtBQUNGO0FERE07RUFDRSx5QkV0Qks7RUZ1QkwsWUFBQTtFQUNBLDREQUFBO1VBQUEsb0RBQUE7RUFDQSxjRTFCUztFRjJCVCxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQ0dSO0FFakNRO0VIdUJGO0lBU0ksaUJBQUE7RUNLUjtBQUNGO0FEREk7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDR047QUVoRFE7RUhxQ0o7SUFVSSxhQUFBO0VDS047QUFDRjtBRTdDUTtFSDZCSjtJQWFJLGFBQUE7RUNPTjtBQUNGO0FFdERRO0VIaUNKO0lBZ0JJLFdBQUE7SUFDQSxZQUFBO0VDU047QUFDRjtBRFBJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkU3RFU7RUY4RFYsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXRTNEUTtBRG9FZDtBRTFFUTtFSHlESjtJQVVJLGlCQUFBO0lBQ0EsZUFBQTtFQ1dOO0FBQ0Y7QURSSTtFQUNFLGlCQUFBO0FDVU47QUVuRlE7RUh3RUo7SUFHSSxtQkFBQTtJQUNBLGlCQUFBO0VDWU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vc3R5bGVzL2NvbG9ycyc7XG5AaW1wb3J0ICcuLi8uLi8uLi8uLi9zdHlsZXMvbWl4aW5pcyc7XG4uaGVhZGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgJi0tYmFja2dyb3VuZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc2Vjb25kcnk7XG4gICAgICBoZWlnaHQ6IDIwdmg7XG4gICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDQwJSA3MHZoLCAwIDEwMCUpO1xuICAgIH1cbiAgICAmLS10ZXh0LWJveCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJvdHRvbTogMjUlO1xuICAgICAgJi1wcmltYXJ5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgICAgIGhlaWdodDogMTB2aDtcbiAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCA0MCUgNzB2aCwgMCAxMDAlKTtcbiAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludHMobW9iaWxlKSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICYtbG9nbyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci10aGlyZDtcbiAgICAgICAgaGVpZ2h0OiAxMHZoO1xuICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMTIlIDAsIDEwMCUgMCwgMTAwJSA3MHZoLCAwIDEwMCUpO1xuICAgICAgICBjb2xvcjogJGNvbG9yLXNlY29uZHJ5O1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50cyhtb2JpbGUpIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgfVxuICAgICAgIFxuICAgICAgfVxuICAgIH1cbiAgICAucXItY29kZSB7XG4gICAgICB3aWR0aDogOS4ycmVtO1xuICAgICAgaGVpZ2h0OiA5LjJyZW07XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHotaW5kZXg6IDQ7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIGxlZnQ6IDExJTtcbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnRzKG1vYmlsZSkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludHMobWVkaXVtKSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgICBAaW5jbHVkZSBicmVha3BvaW50cyhzbWFsbCkge1xuICAgICAgICB3aWR0aDogNnJlbTtcbiAgICAgICAgaGVpZ2h0OiA2cmVtO1xuICAgICAgfVxuICAgIH1cbiAgICAuZmEtdHdpdHRlciB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgICBAaW5jbHVkZSBicmVha3BvaW50cyhtb2JpbGUpIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDByZW07XG4gICAgICAgIHBhZGRpbmc6IC40cmVtO1xuICAgICAgfVxuICAgICAgXG4gICAgfVxuICAgICYgc3BhbiB7XG4gICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnRzKG1vYmlsZSkge1xuICAgICAgICBtYXJnaW4tbGVmdDogLjJyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIiwiLmhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5oZWFkZXItLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDJiMGFiO1xuICBoZWlnaHQ6IDIwdmg7XG4gIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgNDAlIDcwdmgsIDAgMTAwJSk7XG59XG4uaGVhZGVyLS10ZXh0LWJveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMjUlO1xufVxuLmhlYWRlci0tdGV4dC1ib3gtcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDRlNzU7XG4gIGhlaWdodDogMTB2aDtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCA0MCUgNzB2aCwgMCAxMDAlKTtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmhlYWRlci0tdGV4dC1ib3gtcHJpbWFyeSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbn1cbi5oZWFkZXItLXRleHQtYm94LWxvZ28ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICBoZWlnaHQ6IDEwdmg7XG4gIGNsaXAtcGF0aDogcG9seWdvbigxMiUgMCwgMTAwJSAwLCAxMDAlIDcwdmgsIDAgMTAwJSk7XG4gIGNvbG9yOiAjMDJiMGFiO1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5oZWFkZXItLXRleHQtYm94LWxvZ28ge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG59XG4uaGVhZGVyIC5xci1jb2RlIHtcbiAgd2lkdGg6IDkuMnJlbTtcbiAgaGVpZ2h0OiA5LjJyZW07XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogNDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDExJTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuaGVhZGVyIC5xci1jb2RlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgLmhlYWRlciAucXItY29kZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmhlYWRlciAucXItY29kZSB7XG4gICAgd2lkdGg6IDZyZW07XG4gICAgaGVpZ2h0OiA2cmVtO1xuICB9XG59XG4uaGVhZGVyIC5mYS10d2l0dGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNGU3NTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgY29sb3I6ICNmZmY7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmhlYWRlciAuZmEtdHdpdHRlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDByZW07XG4gICAgcGFkZGluZzogMC40cmVtO1xuICB9XG59XG4uaGVhZGVyIHNwYW4ge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuaGVhZGVyIHNwYW4ge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjJyZW07XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gIH1cbn0iLCIvLyBtYWluICBWYXJpYWJsZXNcbiRiZy1jb2xvcjogI2YwZWZlOTtcbiRjb2xvci1wcmltYXJ5OiAjMDA0ZTc1O1xuJGNvbG9yLXNlY29uZHJ5OiAjMDJiMGFiO1xuJGNvbG9yLXRoaXJkOiNmOWY5Zjk7XG4kY29sb3ItaWNvbjogIzUwZTNhNTtcbiRjb2xvci1pY29uLWxpZ2h0OiM0NmJlODk7XG4kY29sb3ItaWNvbi1jaGVjazojNDNlNDljO1xuJGNvbG9yLXdoaXRlOiAjZmZmO1xuJGNvbG9yLWdyYXk6I2VlZTtcbiRjb2xvci1ncmF5LWxpZ2h0OiNjNmM2Y2M7XG4kY29sb3ItZ3JheS1wcmltYXJ5OiNhYWE7XG4kY29sb3ItZ3JheS1zZWNvbmRhcnk6IzVmNjE2YztcbiRjb2xvci1ibGFjazojMDAwO1xuJGNvbG9yLXJlZDogcmVkOyIsIkBtaXhpbiBicmVha3BvaW50cygkcG9pbnQpIHtcbiAgICBAaWYgJHBvaW50ID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRwb2ludCA9PSBzbWFsbCB7XG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoIDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9QGVsc2UgaWYgJHBvaW50ID09IG1lZGl1bSB7XG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoIDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfUBlbHNlIGlmICRwb2ludCA9PSBsYXJnZSB7XG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoIDogOTkycHgpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIFxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/component/todo-item/todo-item.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/component/todo-item/todo-item.component.ts ***!
    \************************************************************/

  /*! exports provided: TodoItemComponent */

  /***/
  function srcAppComponentTodoItemTodoItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoItemComponent", function () {
      return TodoItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TodoItemComponent = /*#__PURE__*/function () {
      function TodoItemComponent() {
        _classCallCheck(this, TodoItemComponent);

        this.todoClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(TodoItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onTodoClicked",
        value: function onTodoClicked() {
          this.todoClicked.emit();
        }
      }, {
        key: "onEditClicked",
        value: function onEditClicked() {
          this.editClicked.emit();
          console.log("edit");
          this.toggleShow;
        }
      }, {
        key: "toggleShow",
        value: function toggleShow() {
          this.isShown = !this.isShown;
        }
      }, {
        key: "onDeleteClicked",
        value: function onDeleteClicked() {
          this.deleteClicked.emit();
          console.log("hello");
        }
      }]);

      return TodoItemComponent;
    }();

    TodoItemComponent.ɵfac = function TodoItemComponent_Factory(t) {
      return new (t || TodoItemComponent)();
    };

    TodoItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TodoItemComponent,
      selectors: [["app-todo-item"]],
      inputs: {
        todo: "todo"
      },
      outputs: {
        todoClicked: "todoClicked",
        editClicked: "editClicked",
        deleteClicked: "deleteClicked",
        popup: "popup"
      },
      decls: 10,
      vars: 3,
      consts: [[1, "todo--item", 3, "click"], [1, "todo--text"], [1, "check--box"], [1, "fas", "fa-check"], [1, "todo--controls-box", 3, "click"], [1, "todo--control-button"], [1, "fas", "fa-pencil-alt", 3, "click"], [1, "todo--control-button", "btn-danger", 3, "click"], [1, "fas", "fa-trash"]],
      template: function TodoItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoItemComponent_Template_div_click_0_listener() {
            return ctx.onTodoClicked();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoItemComponent_Template_div_click_5_listener($event) {
            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoItemComponent_Template_i_click_7_listener() {
            return ctx.onEditClicked();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoItemComponent_Template_div_click_8_listener() {
            return ctx.onDeleteClicked();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("completed", ctx.todo.completed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.todo.title, " ");
        }
      },
      styles: [".todo--item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 1.8rem;\n  padding: 2rem 1.5rem;\n  margin-bottom: 2rem;\n  margin-top: 2rem;\n  border-bottom: 1px solid gray;\n  position: relative;\n  cursor: pointer;\n}\n.todo--item.completed[_ngcontent-%COMP%] {\n  color: #aaa;\n}\n.todo--item[_ngcontent-%COMP%]   .check--box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-shrink: 0;\n  border: 2px solid #c6c6cc;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  text-align: center;\n  transition: background-color 0.2s;\n}\n.todo--item[_ngcontent-%COMP%]   .check--box[_ngcontent-%COMP%]   .fa-check[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: auto;\n  color: #333;\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n.todo--item[_ngcontent-%COMP%]   .todo--controls-box[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  bottom: 0px;\n  right: 0.5rem;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.2s, visibility 0.2s;\n}\n.todo--item[_ngcontent-%COMP%]   .todo--controls-box[_ngcontent-%COMP%]   .todo--control-button[_ngcontent-%COMP%] {\n  display: flex;\n  background: #f5f7f8;\n  padding: 0.7rem 1rem;\n  margin-top: 2rem;\n}\n.todo--item[_ngcontent-%COMP%]   .todo--controls-box[_ngcontent-%COMP%]   .todo--control-button[_ngcontent-%COMP%]   .fa-pencil-alt[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  border-top-left-radius: 0.7rem;\n}\n.todo--item[_ngcontent-%COMP%]   .todo--controls-box[_ngcontent-%COMP%]   .todo--control-button[_ngcontent-%COMP%]   .fa-trash[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  border-top-right-radius: 0.7rem;\n}\n.todo--item[_ngcontent-%COMP%]   .todo--controls-box[_ngcontent-%COMP%]   .todo--control-button[_ngcontent-%COMP%]:hover {\n  background: #eee;\n}\n.todo--item[_ngcontent-%COMP%]   .todo--controls-box[_ngcontent-%COMP%]   .todo--control-button[_ngcontent-%COMP%]:hover   .fa-trash[_ngcontent-%COMP%] {\n  color: red;\n}\n.todo--item[_ngcontent-%COMP%]   .todo--controls-box[_ngcontent-%COMP%]   .todo--control-button[_ngcontent-%COMP%]:active {\n  background: #e5e7e8;\n}\n.todo--item[_ngcontent-%COMP%]:hover   .check--box[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 2px solid #43e49c;\n}\n.todo--item[_ngcontent-%COMP%]:hover   .check--box[_ngcontent-%COMP%]   .fa-check[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  color: #43e49c;\n}\n.todo--item.completed[_ngcontent-%COMP%]   .check--box[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-color: #0be9aa;\n}\n.todo--item.completed[_ngcontent-%COMP%]   .check--box[_ngcontent-%COMP%]   .fa-check[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.todo--item[_ngcontent-%COMP%]:hover   .todo--controls-box[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transition-delay: 0.4s;\n}\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.7);\n  transition: opacity 500ms;\n  visibility: hidden;\n  opacity: 0;\n}\n.overlay[_ngcontent-%COMP%]:target {\n  visibility: visible;\n  opacity: 1;\n}\n.popup[_ngcontent-%COMP%] {\n  margin: 70px auto;\n  padding: 20px;\n  background: #fff;\n  border-radius: 5px;\n  width: 30%;\n  position: relative;\n  transition: all 5s ease-in-out;\n}\n.popup[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #333;\n  font-family: Tahoma, Arial, sans-serif;\n}\n.popup[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 30px;\n  transition: all 200ms;\n  font-size: 30px;\n  font-weight: bold;\n  text-decoration: none;\n  color: #333;\n}\n.popup[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:hover {\n  color: #06D85F;\n}\n.popup[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  max-height: 30%;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZXJtZW55ZWhpYS9EZXNrdG9wL0FuZ3VsYXItQ1JVRC10b2RvbGlzdC9zcmMvYXBwL2NvbXBvbmVudC90b2RvLWl0ZW0vdG9kby1pdGVtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvdG9kby1pdGVtL3RvZG8taXRlbS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9uZXJtZW55ZWhpYS9EZXNrdG9wL0FuZ3VsYXItQ1JVRC10b2RvbGlzdC9zdHlsZXMvX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQUo7QURDSTtFQUNJLFdFRlk7QURHcEI7QURDSTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQ0NSO0FEQ1E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSxVQUFBO0VBQ0Esd0JBQUE7QUNBWjtBREdJO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtBQ0RSO0FERVE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDQVo7QURFWTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUNBWjtBREVZO0VBQ0ksaUJBQUE7RUFDQSwrQkFBQTtBQ0FoQjtBREVZO0VBQ0ksZ0JFaERKO0FEZ0RaO0FEQ2dCO0VBQ0ksVUFBQTtBQ0NwQjtBREVZO0VBQ0ksbUJBQUE7QUNBaEI7QURLQTtFQUNJLGdCRTdEVTtFRjhEVix5QkFBQTtBQ0ZKO0FER0k7RUFDSSxZQUFBO0VBQ0EsY0VsRVU7QURpRWxCO0FESUE7RUFDSSxzQkVyRVU7RUZzRVYscUJBQUE7QUNESjtBREdJO0VBQ0ksVUFBQTtBQ0RSO0FES0E7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ0ZKO0FES0E7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNGSjtBRElFO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0FDREo7QURJRTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQ0RKO0FESUU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHNDQUFBO0FDREo7QURHRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQ0FKO0FERUU7RUFDRSxjQUFBO0FDQ0o7QURDRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvdG9kby1pdGVtL3RvZG8taXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3N0eWxlcy9jb2xvcnMnO1xuLnRvZG8tLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgcGFkZGluZzogMnJlbSAxLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgJi5jb21wbGV0ZWQge1xuICAgICAgICBjb2xvcjokY29sb3ItZ3JheS1wcmltYXJ5O1xuICAgIH1cbiAgICAuY2hlY2stLWJveCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICBib3JkZXI6ICAycHggc29saWQgJGNvbG9yLWdyYXktbGlnaHQ7XG4gICAgICAgIHdpZHRoOiAyOHB4O1xuICAgICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycztcbiAgICAgICBcbiAgICAgICAgLmZhLWNoZWNrIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIGNvbG9yOiMzMzM7XG4gICAgICAgICAgICAvL2hpZGUgYnkgZGVmYXVsdFxuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzO1xuICAgICAgICB9XG4gICAgfVxuICAgIC50b2RvLS1jb250cm9scy1ib3gge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICByaWdodDogLjVyZW07XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnMgLCB2aXNpYmlsaXR5IC4ycztcbiAgICAgICAgLnRvZG8tLWNvbnRyb2wtYnV0dG9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmN2Y4O1xuICAgICAgICAgICAgcGFkZGluZzogLjdyZW0gMXJlbTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG5cbiAgICAgICAgICAgIC5mYS1wZW5jaWwtYWx0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogLjdyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZmEtdHJhc2gge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtOyBcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogLjdyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiRjb2xvci1ncmF5O1xuICAgICAgICAgICAgICAgIC5mYS10cmFzaCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAgcmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTVlN2U4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLnRvZG8tLWl0ZW06aG92ZXIgLmNoZWNrLS1ib3gge1xuICAgIGJhY2tncm91bmQ6ICRjb2xvci13aGl0ZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkY29sb3ItaWNvbi1jaGVjaztcbiAgICAuZmEtY2hlY2sge1xuICAgICAgICBvcGFjaXR5OiAuNTtcbiAgICAgICAgY29sb3I6JGNvbG9yLWljb24tY2hlY2s7XG4gICAgfVxufVxuLnRvZG8tLWl0ZW0uY29tcGxldGVkIC5jaGVjay0tYm94IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMTEsMjMzLDE3MCk7XG5cbiAgICAuZmEtY2hlY2sge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgXG4gICAgfVxufVxuLnRvZG8tLWl0ZW06aG92ZXIgLnRvZG8tLWNvbnRyb2xzLWJveCB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IC40cztcbn1cblxuLm92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgNTAwbXM7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgLm92ZXJsYXk6dGFyZ2V0IHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgXG4gIC5wb3B1cCB7XG4gICAgbWFyZ2luOiA3MHB4IGF1dG87XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB3aWR0aDogMzAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgNXMgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgXG4gIC5wb3B1cCBoMiB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBmb250LWZhbWlseTogVGFob21hLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgfVxuICAucG9wdXAgLmNsb3NlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMHB4O1xuICAgIHJpZ2h0OiAzMHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcztcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjMzMzO1xuICB9XG4gIC5wb3B1cCAuY2xvc2U6aG92ZXIge1xuICAgIGNvbG9yOiAjMDZEODVGO1xuICB9XG4gIC5wb3B1cCAuY29udGVudCB7XG4gICAgbWF4LWhlaWdodDogMzAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG4gICIsIi50b2RvLS1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgcGFkZGluZzogMnJlbSAxLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50b2RvLS1pdGVtLmNvbXBsZXRlZCB7XG4gIGNvbG9yOiAjYWFhO1xufVxuLnRvZG8tLWl0ZW0gLmNoZWNrLS1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXNocmluazogMDtcbiAgYm9yZGVyOiAycHggc29saWQgI2M2YzZjYztcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMjhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbn1cbi50b2RvLS1pdGVtIC5jaGVjay0tYm94IC5mYS1jaGVjayB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBjb2xvcjogIzMzMztcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xufVxuLnRvZG8tLWl0ZW0gLnRvZG8tLWNvbnRyb2xzLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIHJpZ2h0OiAwLjVyZW07XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzLCB2aXNpYmlsaXR5IDAuMnM7XG59XG4udG9kby0taXRlbSAudG9kby0tY29udHJvbHMtYm94IC50b2RvLS1jb250cm9sLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6ICNmNWY3Zjg7XG4gIHBhZGRpbmc6IDAuN3JlbSAxcmVtO1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuLnRvZG8tLWl0ZW0gLnRvZG8tLWNvbnRyb2xzLWJveCAudG9kby0tY29udHJvbC1idXR0b24gLmZhLXBlbmNpbC1hbHQge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC43cmVtO1xufVxuLnRvZG8tLWl0ZW0gLnRvZG8tLWNvbnRyb2xzLWJveCAudG9kby0tY29udHJvbC1idXR0b24gLmZhLXRyYXNoIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjdyZW07XG59XG4udG9kby0taXRlbSAudG9kby0tY29udHJvbHMtYm94IC50b2RvLS1jb250cm9sLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG59XG4udG9kby0taXRlbSAudG9kby0tY29udHJvbHMtYm94IC50b2RvLS1jb250cm9sLWJ1dHRvbjpob3ZlciAuZmEtdHJhc2gge1xuICBjb2xvcjogcmVkO1xufVxuLnRvZG8tLWl0ZW0gLnRvZG8tLWNvbnRyb2xzLWJveCAudG9kby0tY29udHJvbC1idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2U1ZTdlODtcbn1cblxuLnRvZG8tLWl0ZW06aG92ZXIgLmNoZWNrLS1ib3gge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDJweCBzb2xpZCAjNDNlNDljO1xufVxuLnRvZG8tLWl0ZW06aG92ZXIgLmNoZWNrLS1ib3ggLmZhLWNoZWNrIHtcbiAgb3BhY2l0eTogMC41O1xuICBjb2xvcjogIzQzZTQ5Yztcbn1cblxuLnRvZG8tLWl0ZW0uY29tcGxldGVkIC5jaGVjay0tYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjMGJlOWFhO1xufVxuLnRvZG8tLWl0ZW0uY29tcGxldGVkIC5jaGVjay0tYm94IC5mYS1jaGVjayB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi50b2RvLS1pdGVtOmhvdmVyIC50b2RvLS1jb250cm9scy1ib3gge1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjRzO1xufVxuXG4ub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNTAwbXM7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbn1cblxuLm92ZXJsYXk6dGFyZ2V0IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnBvcHVwIHtcbiAgbWFyZ2luOiA3MHB4IGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDMwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBhbGwgNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5wb3B1cCBoMiB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LWZhbWlseTogVGFob21hLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cblxuLnBvcHVwIC5jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICByaWdodDogMzBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4ucG9wdXAgLmNsb3NlOmhvdmVyIHtcbiAgY29sb3I6ICMwNkQ4NUY7XG59XG5cbi5wb3B1cCAuY29udGVudCB7XG4gIG1heC1oZWlnaHQ6IDMwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59IiwiLy8gbWFpbiAgVmFyaWFibGVzXG4kYmctY29sb3I6ICNmMGVmZTk7XG4kY29sb3ItcHJpbWFyeTogIzAwNGU3NTtcbiRjb2xvci1zZWNvbmRyeTogIzAyYjBhYjtcbiRjb2xvci10aGlyZDojZjlmOWY5O1xuJGNvbG9yLWljb246ICM1MGUzYTU7XG4kY29sb3ItaWNvbi1saWdodDojNDZiZTg5O1xuJGNvbG9yLWljb24tY2hlY2s6IzQzZTQ5YztcbiRjb2xvci13aGl0ZTogI2ZmZjtcbiRjb2xvci1ncmF5OiNlZWU7XG4kY29sb3ItZ3JheS1saWdodDojYzZjNmNjO1xuJGNvbG9yLWdyYXktcHJpbWFyeTojYWFhO1xuJGNvbG9yLWdyYXktc2Vjb25kYXJ5OiM1ZjYxNmM7XG4kY29sb3ItYmxhY2s6IzAwMDtcbiRjb2xvci1yZWQ6IHJlZDsiXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-todo-item',
          templateUrl: './todo-item.component.html',
          styleUrls: ['./todo-item.component.scss']
        }]
      }], function () {
        return [];
      }, {
        todo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        todoClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        editClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        deleteClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        popup: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/component/todo-list/todo-list.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/component/todo-list/todo-list.component.ts ***!
    \************************************************************/

  /*! exports provided: TodoListComponent */

  /***/
  function srcAppComponentTodoListTodoListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoListComponent", function () {
      return TodoListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _services_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/todo.service */
    "./src/app/services/todo.service.ts");
    /* harmony import */


    var _modal_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../_modal/modal.service */
    "./src/app/_modal/modal.service.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/component/header/header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _modal_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../_modal/modal.component */
    "./src/app/_modal/modal.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _fliter_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../fliter.pipe */
    "./src/app/fliter.pipe.ts");

    function TodoListComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TodoListComponent_div_21_Template_input_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.searchText = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.searchText);
      }
    }

    function TodoListComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoListComponent_div_23_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var todo_r7 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.todoCompleted(todo_r7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoListComponent_div_23_Template_div_click_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          return $event.stopPropagation();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoListComponent_div_23_Template_i_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var todo_r7 = ctx.$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.openModal("custom-modal-1", todo_r7.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoListComponent_div_23_Template_div_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var todo_r7 = ctx.$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.deleteTodo(todo_r7.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var todo_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("completed", todo_r7.completed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", todo_r7.title, " ");
      }
    }

    function TodoListComponent_ng_template_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("No results found for \"", ctx_r3.searchText, "\".");
      }
    }

    function TodoListComponent_div_30_div_9_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter the text of your todo ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TodoListComponent_div_30_div_9_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Todo text must be at least 2 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TodoListComponent_div_30_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TodoListComponent_div_30_div_9_p_1_Template, 2, 0, "p", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TodoListComponent_div_30_div_9_p_2_Template, 2, 0, "p", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r15.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r15.errors.minlength);
      }
    }

    function TodoListComponent_div_30_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 27, 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TodoListComponent_div_30_Template_form_ngSubmit_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.createTodo(_r14);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add New Todo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 29, 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TodoListComponent_div_30_div_9_Template, 3, 2, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r15.invalid && ctx_r4.showValidationErrors);
      }
    }

    var TodoListComponent = /*#__PURE__*/function () {
      function TodoListComponent(todoService, modalService) {
        _classCallCheck(this, TodoListComponent);

        this.todoService = todoService;
        this.modalService = modalService;
        this.todoList = null;
        this.showValidationErrors = false;
      }

      _createClass(TodoListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.listTodos();
          this.date = new Date();
          var lang = localStorage.getItem('lang') || 'en';
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept-Language': lang
          });
        }
      }, {
        key: "listTodos",
        value: function listTodos() {
          var _this2 = this;

          this.todoService.list().subscribe(function (response) {
            _this2.todoList = response;
            console.log(response);
          }, function (error) {});
        }
      }, {
        key: "createTodo",
        value: function createTodo(form) {
          var _this3 = this;

          if (form.invalid) return this.showValidationErrors = true;
          var todo = {
            title: form.value.title
          };
          this.todoService.create(todo).subscribe(function (response) {
            _this3.listTodos();
          }, function (error) {});
          form.reset();
        }
      }, {
        key: "deleteTodo",
        value: function deleteTodo(id) {
          var _this4 = this;

          this.todoService["delete"](id).subscribe(function (response) {
            _this4.listTodos();
          }, function (error) {});
        }
      }, {
        key: "toggleShow",
        value: function toggleShow() {
          this.isShown = !this.isShown;
        }
      }, {
        key: "todoCompleted",
        value: function todoCompleted(todoList) {
          todoList.completed = !todoList.completed;
        }
      }, {
        key: "openModal",
        value: function openModal(id, todoID) {
          console.log("open popup", todoID); // this.openModalList(id);

          this.modalService.open(id);
          this.editTodoID = todoID;
        }
      }, {
        key: "closeModal",
        value: function closeModal(id) {
          this.modalService.close(id);
        }
      }, {
        key: "onUpdateModel",
        value: function onUpdateModel(event) {
          var _this5 = this;

          console.log('data', event);
          var data = {
            title: event
          };
          this.todoService.update(this.editTodoID, data).subscribe(function (res) {
            _this5.listTodos();
          });
        }
      }]);

      return TodoListComponent;
    }();

    TodoListComponent.ɵfac = function TodoListComponent_Factory(t) {
      return new (t || TodoListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modal_modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"]));
    };

    TodoListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TodoListComponent,
      selectors: [["app-todo-list"]],
      decls: 32,
      vars: 26,
      consts: [[1, "section"], [1, "container-section"], [1, "add-todo-box"], [1, "todos--list"], [1, "row"], [1, "year"], [1, "date--year"], [1, "year--detail"], [1, "day"], ["class", "form-group", 4, "ngIf", "ngIfElse"], ["class", "todo--item", 3, "completed", "click", 4, "ngFor", "ngForOf"], ["noResults", ""], [1, "btn-main", "btn-target", 3, "click"], [1, "fas", "fa-plus"], ["class", "add-todo-box", 4, "ngIf"], ["id", "custom-modal-1", 3, "updateModel"], [1, "form-group"], ["type", "text", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "todo--item", 3, "click"], [1, "todo--text"], [1, "check--box"], [1, "fas", "fa-check"], [1, "todo--controls-box", 3, "click"], [1, "todo--control-button"], [1, "fas", "fa-pencil-alt", 3, "click"], [1, "todo--control-button", "btn-danger", 3, "click"], [1, "fas", "fa-trash"], [3, "ngSubmit"], ["form", "ngForm"], ["ngModel", "", "name", "title", "minlength", "3", "type", "text", "placeholder", "Write Your todo", "required", "", 1, "input"], ["todoTextField", "ngModel"], ["type", "submit", 1, "btn", "btn-add"], [4, "ngIf"], ["class", "help is-danger", 4, "ngIf"], [1, "help", "is-danger"]],
      template: function TodoListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, TodoListComponent_div_21_Template, 2, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TodoListComponent_div_23_Template, 10, 3, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, TodoListComponent_ng_template_25_Template, 2, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoListComponent_Template_button_click_27_listener() {
            return ctx.toggleShow();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, TodoListComponent_div_30_Template, 10, 1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "jw-modal", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updateModel", function TodoListComponent_Template_jw_modal_updateModel_31_listener($event) {
            return ctx.onUpdateModel($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 8, ctx.date, "dd"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 11, ctx.date, "MMM"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 14, ctx.date, "yyyy"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 17, ctx.date, "EEEE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](22, 20, ctx.todoList, ctx.searchText).length > 0)("ngIfElse", _r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](24, 23, ctx.todoList, ctx.searchText));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShown);
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_6__["ModalComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _fliter_pipe__WEBPACK_IMPORTED_MODULE_8__["FilterPipe"]],
      styles: [".container-section[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 50rem;\n  position: relative;\n}\n@media (max-width: 600px) {\n  .container-section[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    max-width: 34rem;\n  }\n}\n.container-section[_ngcontent-%COMP%]   .add-todo-box[_ngcontent-%COMP%] {\n  padding: 2rem;\n  background: #fff;\n  border-radius: 0.4rem;\n  margin-top: 5rem;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n@media (max-width: 600px) {\n  .container-section[_ngcontent-%COMP%]   .add-todo-box[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}\n.container-section[_ngcontent-%COMP%]   .add-todo-box[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  height: 3rem;\n  padding: 0.5rem;\n  font-size: 1.2rem;\n  box-sizing: border-box;\n  width: calc(100% - 63px);\n}\n.container-section[_ngcontent-%COMP%]   .add-todo-box[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus {\n  outline-color: transparent;\n  outline-style: none;\n}\n.container-section[_ngcontent-%COMP%]   .btn-main[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 44%;\n  top: 74%;\n  height: 5rem;\n  width: 5rem;\n  border-radius: 50%;\n  padding: 1rem;\n  margin: 0.5rem;\n  border: none;\n  background-color: #50e3a5;\n  font-size: 24px;\n  cursor: pointer;\n  outline: none;\n  color: #fff;\n}\n.container-section[_ngcontent-%COMP%]   .btn-main[_ngcontent-%COMP%]:hover {\n  background: #46be89;\n}\n.container-section[_ngcontent-%COMP%]   .btn-main[_ngcontent-%COMP%]:active {\n  opacity: 0.8;\n}\n.container-section[_ngcontent-%COMP%]   .btn-main[_ngcontent-%COMP%]:focus {\n  color: #fff;\n  opacity: 1;\n}\n@media (max-width: 600px) {\n  .container-section[_ngcontent-%COMP%]   .btn-main[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 44%;\n    top: 89%;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .container-section[_ngcontent-%COMP%]   .btn-main[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 44%;\n    top: 92%;\n  }\n}\n@media (min-width: 992px) {\n  .container-section[_ngcontent-%COMP%]   .btn-main[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 44%;\n    top: 92%;\n  }\n}\n.container-section[_ngcontent-%COMP%]   .todos--list[_ngcontent-%COMP%] {\n  position: relative;\n}\n.container-section[_ngcontent-%COMP%]   .todo--item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 1.8rem;\n  padding: 2.5rem 1.5rem;\n  margin-bottom: 2rem;\n  margin-top: 2rem;\n  border-bottom: 0.1px solid #eee;\n  position: relative;\n  cursor: pointer;\n}\n@media (max-width: 600px) {\n  .container-section[_ngcontent-%COMP%]   .todo--item[_ngcontent-%COMP%] {\n    padding: 2rem 0.5rem;\n  }\n}\n.container-section[_ngcontent-%COMP%]   .todo--item.completed[_ngcontent-%COMP%] {\n  color: #aaa;\n}\n.container-section[_ngcontent-%COMP%]   .todo--item[_ngcontent-%COMP%]   .check--box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-shrink: 0;\n  border: 2px solid #c6c6cc;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  text-align: center;\n  transition: background-color 0.2s;\n}\n.container-section[_ngcontent-%COMP%]   .todo--item[_ngcontent-%COMP%]   .check--box[_ngcontent-%COMP%]   .fa-check[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: auto;\n  color: #333;\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n.container-section[_ngcontent-%COMP%]   .todo--item[_ngcontent-%COMP%]   .todo--controls-box[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  bottom: 0px;\n  right: 0.5rem;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.2s, visibility 0.2s;\n}\n.container-section[_ngcontent-%COMP%]   .todo--item[_ngcontent-%COMP%]   .todo--controls-box[_ngcontent-%COMP%]   .todo--control-button[_ngcontent-%COMP%] {\n  display: flex;\n  background: #f5f7f8;\n  padding: 0.5rem 1rem;\n  margin-top: 2rem;\n}\n@media (max-width: 600px) {\n  .container-section[_ngcontent-%COMP%]   .todo--item[_ngcontent-%COMP%]   .todo--controls-box[_ngcontent-%COMP%]   .todo--control-button[_ngcontent-%COMP%] {\n    padding: 0.5rem 0.5rem;\n  }\n}\n.container-section[_ngcontent-%COMP%]   .todo--item[_ngcontent-%COMP%]   .todo--controls-box[_ngcontent-%COMP%]   .todo--control-button[_ngcontent-%COMP%]   .fa-pencil-alt[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  border-top-left-radius: 0.7rem;\n}\n@media (max-width: 600px) {\n  .container-section[_ngcontent-%COMP%]   .todo--item[_ngcontent-%COMP%]   .todo--controls-box[_ngcontent-%COMP%]   .todo--control-button[_ngcontent-%COMP%]   .fa-pencil-alt[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n.container-section[_ngcontent-%COMP%]   .todo--item[_ngcontent-%COMP%]   .todo--controls-box[_ngcontent-%COMP%]   .todo--control-button[_ngcontent-%COMP%]   .fa-trash[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  border-top-right-radius: 0.7rem;\n}\n@media (max-width: 600px) {\n  .container-section[_ngcontent-%COMP%]   .todo--item[_ngcontent-%COMP%]   .todo--controls-box[_ngcontent-%COMP%]   .todo--control-button[_ngcontent-%COMP%]   .fa-trash[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n.container-section[_ngcontent-%COMP%]   .todo--item[_ngcontent-%COMP%]   .todo--controls-box[_ngcontent-%COMP%]   .todo--control-button[_ngcontent-%COMP%]:hover {\n  background: #eee;\n}\n.container-section[_ngcontent-%COMP%]   .todo--item[_ngcontent-%COMP%]   .todo--controls-box[_ngcontent-%COMP%]   .todo--control-button[_ngcontent-%COMP%]:hover   .fa-trash[_ngcontent-%COMP%] {\n  color: red;\n}\n.container-section[_ngcontent-%COMP%]   .todo--item[_ngcontent-%COMP%]   .todo--controls-box[_ngcontent-%COMP%]   .todo--control-button[_ngcontent-%COMP%]:active {\n  background: #e5e7e8;\n}\n.container-section[_ngcontent-%COMP%]   .todo--item[_ngcontent-%COMP%]:hover   .check--box[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 2px solid #43e49c;\n}\n.container-section[_ngcontent-%COMP%]   .todo--item[_ngcontent-%COMP%]:hover   .check--box[_ngcontent-%COMP%]   .fa-check[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  color: #43e49c;\n}\n.container-section[_ngcontent-%COMP%]   .todo--item.completed[_ngcontent-%COMP%]   .check--box[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-color: #0be9aa;\n}\n.container-section[_ngcontent-%COMP%]   .todo--item.completed[_ngcontent-%COMP%]   .check--box[_ngcontent-%COMP%]   .fa-check[_ngcontent-%COMP%] {\n  opacity: 1;\n  color: #46be89;\n}\n.container-section[_ngcontent-%COMP%]   .todo--item[_ngcontent-%COMP%]:hover   .todo--controls-box[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transition-delay: 0.4s;\n}\n.form-group[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZXJtZW55ZWhpYS9EZXNrdG9wL0FuZ3VsYXItQ1JVRC10b2RvbGlzdC9zcmMvYXBwL2NvbXBvbmVudC90b2RvLWxpc3QvdG9kby1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvdG9kby1saXN0L3RvZG8tbGlzdC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9uZXJtZW55ZWhpYS9EZXNrdG9wL0FuZ3VsYXItQ1JVRC10b2RvbGlzdC9zdHlsZXMvX21peGluaXMuc2NzcyIsIi9Vc2Vycy9uZXJtZW55ZWhpYS9EZXNrdG9wL0FuZ3VsYXItQ1JVRC10b2RvbGlzdC9zdHlsZXMvX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNIRjtBQ0ZRO0VGRVI7SUFLSSxjQUFBO0lBQ0EsZ0JBQUE7RUNERjtBQUNGO0FERUU7RUFDRSxhQUFBO0VBQ0EsZ0JHTlU7RUhPVixxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7QUNBSjtBQ2ZRO0VGVU47SUFPSSxhQUFBO0VDRUo7QUFDRjtBRERJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7QUNHTjtBRERJO0VBQ0UsMEJBQUE7RUFDQSxtQkFBQTtBQ0dOO0FEQUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHlCR3RDUztFSHVDVCxlQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxXR3ZDVTtBRnlDZDtBRERJO0VBQ0UsbUJHM0NZO0FGOENsQjtBRERJO0VBQ0UsWUFBQTtBQ0dOO0FEQUk7RUFDRSxXR2hEUTtFSGlEUixVQUFBO0FDRU47QUN6RFE7RUYrQk47SUEyQkksa0JBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtFQ0dKO0FBQ0Y7QUM1RFE7RUYyQk47SUFnQ0ksa0JBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtFQ0tKO0FBQ0Y7QUMzRFE7RUZtQk47SUFxQ0ksa0JBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtFQ09KO0FBQ0Y7QURMRTtFQUNFLGtCQUFBO0FDT0o7QURKRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ01KO0FDN0ZRO0VGNkVOO0lBWUksb0JBQUE7RUNRSjtBQUNGO0FEUEk7RUFDRSxXR25GYztBRjRGcEI7QURQSTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQ1NOO0FEUE07RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSxVQUFBO0VBQ0Esd0JBQUE7QUNRUjtBRExJO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtBQ09OO0FETk07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDUVI7QUNySVE7RUZ5SEY7SUFNSSxzQkFBQTtFQ1VSO0FBQ0Y7QURSUTtFQUNFLGlCQUFBO0VBQ0EsOEJBQUE7QUNVVjtBQzlJUTtFRmtJQTtJQUlJLGVBQUE7RUNZVjtBQUNGO0FEVlE7RUFDRSxpQkFBQTtFQUNBLCtCQUFBO0FDWVY7QUN2SlE7RUZ5SUE7SUFJSSxlQUFBO0VDY1Y7QUFDRjtBRFpRO0VBQ0UsZ0JHMUlFO0FGd0paO0FEYlU7RUFDRSxVQUFBO0FDZVo7QURaUTtFQUNFLG1CQUFBO0FDY1Y7QURURTtFQUNFLGdCR3ZKVTtFSHdKVix5QkFBQTtBQ1dKO0FEVkk7RUFDRSxZQUFBO0VBQ0EsY0c1Slk7QUZ3S2xCO0FEVEU7RUFDRSxzQkcvSlU7RUhnS1YscUJBQUE7QUNXSjtBRFRJO0VBQ0UsVUFBQTtFQUNBLGNHdEtZO0FGaUxsQjtBRFJFO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNVSjtBRFBBO0VBQ0Usa0JBQUE7QUNVRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC90b2RvLWxpc3QvdG9kby1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxlcy9jb2xvcnNcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsZXMvbWl4aW5pc1wiO1xuXG5cbi5jb250YWluZXItc2VjdGlvbiB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDUwcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIEBpbmNsdWRlIGJyZWFrcG9pbnRzKG1vYmlsZSkge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1heC13aWR0aDogMzRyZW07XG4gIH1cbiAgLmFkZC10b2RvLWJveCB7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3Itd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xuICAgIG1hcmdpbi10b3A6IDVyZW07XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKCRjb2xvci1ibGFjaywgMC4wOCk7XG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludHMobW9iaWxlKSB7XG4gICAgICBwYWRkaW5nOiAxcmVtO1xuICAgIH1cbiAgICBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gNjNweCk7XG4gICAgfVxuICAgIDpmb2N1cyB7XG4gICAgICBvdXRsaW5lLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIG91dGxpbmUtc3R5bGU6IG5vbmU7XG4gICAgfVxuICB9XG4gIC5idG4tbWFpbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDQ0JTtcbiAgICB0b3A6IDc0JTtcbiAgICBoZWlnaHQ6IDVyZW07XG4gICAgd2lkdGg6IDVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgbWFyZ2luOiAwLjVyZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1pY29uO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogJGNvbG9yLWljb24tbGlnaHQ7XG4gICAgfVxuICAgICY6YWN0aXZlIHtcbiAgICAgIG9wYWNpdHk6IDAuODtcbiAgICB9XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICBAaW5jbHVkZSBicmVha3BvaW50cyhtb2JpbGUpIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDQ0JTtcbiAgICAgIHRvcDogODklO1xuICAgIH1cbiAgICBAaW5jbHVkZSBicmVha3BvaW50cyhzbWFsbCkge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogNDQlO1xuICAgICAgdG9wOiA5MiU7XG4gICAgfVxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnRzKGxhcmdlKSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiA0NCU7XG4gICAgICB0b3A6IDkyJTtcbiAgICB9XG4gIH1cbiAgLnRvZG9zLS1saXN0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLy8gdG9kbyBsaXN0XG4gIC50b2RvLS1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIHBhZGRpbmc6IDIuNXJlbSAxLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIGJvcmRlci1ib3R0b206IC4xcHggc29saWQgI2VlZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnRzKG1vYmlsZSkge1xuICAgICAgcGFkZGluZzogMnJlbSAwLjVyZW07XG4gICAgfVxuICAgICYuY29tcGxldGVkIHtcbiAgICAgIGNvbG9yOiAkY29sb3ItZ3JheS1wcmltYXJ5O1xuICAgIH1cbiAgICAuY2hlY2stLWJveCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAkY29sb3ItZ3JheS1saWdodDtcbiAgICAgIHdpZHRoOiAyOHB4O1xuICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xuXG4gICAgICAuZmEtY2hlY2sge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgIC8vaGlkZSBieSBkZWZhdWx0XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbiAgICAgIH1cbiAgICB9XG4gICAgLnRvZG8tLWNvbnRyb2xzLWJveCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAwcHg7XG4gICAgICByaWdodDogMC41cmVtO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycywgdmlzaWJpbGl0eSAwLjJzO1xuICAgICAgLnRvZG8tLWNvbnRyb2wtYnV0dG9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjdmODtcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnRzKG1vYmlsZSkge1xuICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuZmEtcGVuY2lsLWFsdCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC43cmVtO1xuICAgICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnRzKG1vYmlsZSkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuZmEtdHJhc2gge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjdyZW07XG4gICAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludHMobW9iaWxlKSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci1ncmF5O1xuICAgICAgICAgIC5mYS10cmFzaCB7XG4gICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2U1ZTdlODtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAudG9kby0taXRlbTpob3ZlciAuY2hlY2stLWJveCB7XG4gICAgYmFja2dyb3VuZDogJGNvbG9yLXdoaXRlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICRjb2xvci1pY29uLWNoZWNrO1xuICAgIC5mYS1jaGVjayB7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICBjb2xvcjogJGNvbG9yLWljb24tY2hlY2s7XG4gICAgfVxuICB9XG4gIC50b2RvLS1pdGVtLmNvbXBsZXRlZCAuY2hlY2stLWJveCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDExLCAyMzMsIDE3MCk7XG5cbiAgICAuZmEtY2hlY2sge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIGNvbG9yOiAkY29sb3ItaWNvbi1saWdodDtcbiAgICB9XG4gIH1cbiAgLnRvZG8tLWl0ZW06aG92ZXIgLnRvZG8tLWNvbnRyb2xzLWJveCB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNHM7XG4gIH1cbn1cbi5mb3JtLWdyb3VwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIiwiLmNvbnRhaW5lci1zZWN0aW9uIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogNTByZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyLXNlY3Rpb24ge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1heC13aWR0aDogMzRyZW07XG4gIH1cbn1cbi5jb250YWluZXItc2VjdGlvbiAuYWRkLXRvZG8tYm94IHtcbiAgcGFkZGluZzogMnJlbTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xuICBtYXJnaW4tdG9wOiA1cmVtO1xuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRhaW5lci1zZWN0aW9uIC5hZGQtdG9kby1ib3gge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cbn1cbi5jb250YWluZXItc2VjdGlvbiAuYWRkLXRvZG8tYm94IGlucHV0W3R5cGU9dGV4dF0ge1xuICBoZWlnaHQ6IDNyZW07XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA2M3B4KTtcbn1cbi5jb250YWluZXItc2VjdGlvbiAuYWRkLXRvZG8tYm94IDpmb2N1cyB7XG4gIG91dGxpbmUtY29sb3I6IHRyYW5zcGFyZW50O1xuICBvdXRsaW5lLXN0eWxlOiBub25lO1xufVxuLmNvbnRhaW5lci1zZWN0aW9uIC5idG4tbWFpbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNDQlO1xuICB0b3A6IDc0JTtcbiAgaGVpZ2h0OiA1cmVtO1xuICB3aWR0aDogNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXJnaW46IDAuNXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTBlM2E1O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG59XG4uY29udGFpbmVyLXNlY3Rpb24gLmJ0bi1tYWluOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzQ2YmU4OTtcbn1cbi5jb250YWluZXItc2VjdGlvbiAuYnRuLW1haW46YWN0aXZlIHtcbiAgb3BhY2l0eTogMC44O1xufVxuLmNvbnRhaW5lci1zZWN0aW9uIC5idG4tbWFpbjpmb2N1cyB7XG4gIGNvbG9yOiAjZmZmO1xuICBvcGFjaXR5OiAxO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXItc2VjdGlvbiAuYnRuLW1haW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA0NCU7XG4gICAgdG9wOiA4OSU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5jb250YWluZXItc2VjdGlvbiAuYnRuLW1haW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA0NCU7XG4gICAgdG9wOiA5MiU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyLXNlY3Rpb24gLmJ0bi1tYWluIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNDQlO1xuICAgIHRvcDogOTIlO1xuICB9XG59XG4uY29udGFpbmVyLXNlY3Rpb24gLnRvZG9zLS1saXN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvbnRhaW5lci1zZWN0aW9uIC50b2RvLS1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgcGFkZGluZzogMi41cmVtIDEuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMC4xcHggc29saWQgI2VlZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRhaW5lci1zZWN0aW9uIC50b2RvLS1pdGVtIHtcbiAgICBwYWRkaW5nOiAycmVtIDAuNXJlbTtcbiAgfVxufVxuLmNvbnRhaW5lci1zZWN0aW9uIC50b2RvLS1pdGVtLmNvbXBsZXRlZCB7XG4gIGNvbG9yOiAjYWFhO1xufVxuLmNvbnRhaW5lci1zZWN0aW9uIC50b2RvLS1pdGVtIC5jaGVjay0tYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNjNmM2Y2M7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG59XG4uY29udGFpbmVyLXNlY3Rpb24gLnRvZG8tLWl0ZW0gLmNoZWNrLS1ib3ggLmZhLWNoZWNrIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGNvbG9yOiAjMzMzO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG59XG4uY29udGFpbmVyLXNlY3Rpb24gLnRvZG8tLWl0ZW0gLnRvZG8tLWNvbnRyb2xzLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIHJpZ2h0OiAwLjVyZW07XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzLCB2aXNpYmlsaXR5IDAuMnM7XG59XG4uY29udGFpbmVyLXNlY3Rpb24gLnRvZG8tLWl0ZW0gLnRvZG8tLWNvbnRyb2xzLWJveCAudG9kby0tY29udHJvbC1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiAjZjVmN2Y4O1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyLXNlY3Rpb24gLnRvZG8tLWl0ZW0gLnRvZG8tLWNvbnRyb2xzLWJveCAudG9kby0tY29udHJvbC1idXR0b24ge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW07XG4gIH1cbn1cbi5jb250YWluZXItc2VjdGlvbiAudG9kby0taXRlbSAudG9kby0tY29udHJvbHMtYm94IC50b2RvLS1jb250cm9sLWJ1dHRvbiAuZmEtcGVuY2lsLWFsdCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjdyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRhaW5lci1zZWN0aW9uIC50b2RvLS1pdGVtIC50b2RvLS1jb250cm9scy1ib3ggLnRvZG8tLWNvbnRyb2wtYnV0dG9uIC5mYS1wZW5jaWwtYWx0IHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cbi5jb250YWluZXItc2VjdGlvbiAudG9kby0taXRlbSAudG9kby0tY29udHJvbHMtYm94IC50b2RvLS1jb250cm9sLWJ1dHRvbiAuZmEtdHJhc2gge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuN3JlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyLXNlY3Rpb24gLnRvZG8tLWl0ZW0gLnRvZG8tLWNvbnRyb2xzLWJveCAudG9kby0tY29udHJvbC1idXR0b24gLmZhLXRyYXNoIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cbi5jb250YWluZXItc2VjdGlvbiAudG9kby0taXRlbSAudG9kby0tY29udHJvbHMtYm94IC50b2RvLS1jb250cm9sLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG59XG4uY29udGFpbmVyLXNlY3Rpb24gLnRvZG8tLWl0ZW0gLnRvZG8tLWNvbnRyb2xzLWJveCAudG9kby0tY29udHJvbC1idXR0b246aG92ZXIgLmZhLXRyYXNoIHtcbiAgY29sb3I6IHJlZDtcbn1cbi5jb250YWluZXItc2VjdGlvbiAudG9kby0taXRlbSAudG9kby0tY29udHJvbHMtYm94IC50b2RvLS1jb250cm9sLWJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZTVlN2U4O1xufVxuLmNvbnRhaW5lci1zZWN0aW9uIC50b2RvLS1pdGVtOmhvdmVyIC5jaGVjay0tYm94IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAycHggc29saWQgIzQzZTQ5Yztcbn1cbi5jb250YWluZXItc2VjdGlvbiAudG9kby0taXRlbTpob3ZlciAuY2hlY2stLWJveCAuZmEtY2hlY2sge1xuICBvcGFjaXR5OiAwLjU7XG4gIGNvbG9yOiAjNDNlNDljO1xufVxuLmNvbnRhaW5lci1zZWN0aW9uIC50b2RvLS1pdGVtLmNvbXBsZXRlZCAuY2hlY2stLWJveCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1jb2xvcjogIzBiZTlhYTtcbn1cbi5jb250YWluZXItc2VjdGlvbiAudG9kby0taXRlbS5jb21wbGV0ZWQgLmNoZWNrLS1ib3ggLmZhLWNoZWNrIHtcbiAgb3BhY2l0eTogMTtcbiAgY29sb3I6ICM0NmJlODk7XG59XG4uY29udGFpbmVyLXNlY3Rpb24gLnRvZG8tLWl0ZW06aG92ZXIgLnRvZG8tLWNvbnRyb2xzLWJveCB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuNHM7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSIsIkBtaXhpbiBicmVha3BvaW50cygkcG9pbnQpIHtcbiAgICBAaWYgJHBvaW50ID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRwb2ludCA9PSBzbWFsbCB7XG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoIDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9QGVsc2UgaWYgJHBvaW50ID09IG1lZGl1bSB7XG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoIDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfUBlbHNlIGlmICRwb2ludCA9PSBsYXJnZSB7XG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoIDogOTkycHgpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIFxufSIsIi8vIG1haW4gIFZhcmlhYmxlc1xuJGJnLWNvbG9yOiAjZjBlZmU5O1xuJGNvbG9yLXByaW1hcnk6ICMwMDRlNzU7XG4kY29sb3Itc2Vjb25kcnk6ICMwMmIwYWI7XG4kY29sb3ItdGhpcmQ6I2Y5ZjlmOTtcbiRjb2xvci1pY29uOiAjNTBlM2E1O1xuJGNvbG9yLWljb24tbGlnaHQ6IzQ2YmU4OTtcbiRjb2xvci1pY29uLWNoZWNrOiM0M2U0OWM7XG4kY29sb3Itd2hpdGU6ICNmZmY7XG4kY29sb3ItZ3JheTojZWVlO1xuJGNvbG9yLWdyYXktbGlnaHQ6I2M2YzZjYztcbiRjb2xvci1ncmF5LXByaW1hcnk6I2FhYTtcbiRjb2xvci1ncmF5LXNlY29uZGFyeTojNWY2MTZjO1xuJGNvbG9yLWJsYWNrOiMwMDA7XG4kY29sb3ItcmVkOiByZWQ7Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-todo-list',
          templateUrl: './todo-list.component.html',
          styleUrls: ['./todo-list.component.scss']
        }]
      }], function () {
        return [{
          type: _services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]
        }, {
          type: _modal_modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/fliter.pipe.ts":
  /*!********************************!*\
    !*** ./src/app/fliter.pipe.ts ***!
    \********************************/

  /*! exports provided: FilterPipe */

  /***/
  function srcAppFliterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterPipe", function () {
      return FilterPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FilterPipe = /*#__PURE__*/function () {
      function FilterPipe() {
        _classCallCheck(this, FilterPipe);
      }

      _createClass(FilterPipe, [{
        key: "transform",
        value: function transform(items, searchText) {
          if (!items) return [];
          if (!searchText) return items;
          return items.filter(function (item) {
            return Object.keys(item).some(function (key) {
              return String(item[key]).toLowerCase().includes(searchText.toLowerCase());
            });
          });
        }
      }]);

      return FilterPipe;
    }();

    FilterPipe.ɵfac = function FilterPipe_Factory(t) {
      return new (t || FilterPipe)();
    };

    FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "filter",
      type: FilterPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'filter'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/interceptor/language-interceptor.ts":
  /*!*****************************************************!*\
    !*** ./src/app/interceptor/language-interceptor.ts ***!
    \*****************************************************/

  /*! exports provided: LanguageInterceptor */

  /***/
  function srcAppInterceptorLanguageInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguageInterceptor", function () {
      return LanguageInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LanguageInterceptor = /*#__PURE__*/function () {
      function LanguageInterceptor() {
        _classCallCheck(this, LanguageInterceptor);
      }

      _createClass(LanguageInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var lang = localStorage.getItem('lang') || 'en';
          req = req.clone({
            setHeaders: {
              'Accept-Language': lang
            }
          });
          return next.handle(req);
        }
      }]);

      return LanguageInterceptor;
    }();

    LanguageInterceptor.ɵfac = function LanguageInterceptor_Factory(t) {
      return new (t || LanguageInterceptor)();
    };

    LanguageInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LanguageInterceptor,
      factory: LanguageInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LanguageInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/todo.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/todo.service.ts ***!
    \******************************************/

  /*! exports provided: TodoService */

  /***/
  function srcAppServicesTodoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoService", function () {
      return TodoService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var TodoService = /*#__PURE__*/function () {
      function TodoService(httpclient) {
        _classCallCheck(this, TodoService);

        this.httpclient = httpclient;
        this.apiUrl = 'http://localhost:3000/todos';
      } // Read


      _createClass(TodoService, [{
        key: "list",
        value: function list() {
          return this.httpclient.get("".concat(this.apiUrl));
        } // Create

      }, {
        key: "create",
        value: function create(data) {
          var API_URL = "".concat(this.apiUrl);
          return this.httpclient.post(API_URL, data);
        } // Update

      }, {
        key: "update",
        value: function update(id, data) {
          var API_URL = "".concat(this.apiUrl, "/").concat(id);
          return this.httpclient.patch(API_URL, data);
        } // Delete

      }, {
        key: "delete",
        value: function _delete(id) {
          var API_URL = "".concat(this.apiUrl, "/").concat(id);
          return this.httpclient["delete"](API_URL);
        }
      }]);

      return TodoService;
    }();

    TodoService.ɵfac = function TodoService_Factory(t) {
      return new (t || TodoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    TodoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TodoService,
      factory: TodoService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/nermenyehia/Desktop/Angular-CRUD-todolist/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map