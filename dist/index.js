"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Index = function () {
	function Index(type) {
		_classCallCheck(this, Index);

		this.type = type;
	}

	_createClass(Index, [{
		key: "sayhello",
		value: function sayhello() {

			return "\u7BA1\u7406\u5458" + this.type;
		}
	}]);

	return Index;
}();
//# sourceMappingURL=index.js.map
