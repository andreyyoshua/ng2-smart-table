import { cloneDeep } from 'lodash';
/**
 * Extending object that entered in first argument.
 *
 * Returns extended object or false if have no target object or incorrect type.
 *
 * If you wish to clone source object (without modify it), just use empty new
 * object as first argument, like this:
 *   deepExtend({}, yourObj_1, [yourObj_N]);
 */
export var deepExtend = function () {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i] = arguments[_i];
    }
    if (arguments.length < 1 || typeof arguments[0] !== 'object') {
        return false;
    }
    if (arguments.length < 2) {
        return arguments[0];
    }
    var target = arguments[0];
    // convert arguments to array and cut off target object
    var args = Array.prototype.slice.call(arguments, 1);
    var val, src;
    args.forEach(function (obj) {
        // skip argument if it is array or isn't object
        if (typeof obj !== 'object' || Array.isArray(obj)) {
            return;
        }
        Object.keys(obj).forEach(function (key) {
            src = target[key]; // source value
            val = obj[key]; // new value
            // recursion prevention
            if (val === target) {
                return;
                /**
                 * if new value isn't object then just overwrite by new value
                 * instead of extending.
                 */
            }
            else if (typeof val !== 'object' || val === null) {
                target[key] = val;
                return;
                // just clone arrays (and recursive clone objects inside)
            }
            else if (Array.isArray(val)) {
                target[key] = cloneDeep(val);
                return;
                // overwrite by new value if source isn't object or array
            }
            else if (typeof src !== 'object' || src === null || Array.isArray(src)) {
                target[key] = deepExtend({}, val);
                return;
                // source value and new value is objects both, extending...
            }
            else {
                target[key] = deepExtend(src, val);
                return;
            }
        });
    });
    return target;
};
var Deferred = /** @class */ (function () {
    function Deferred() {
        var _this = this;
        this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
    }
    return Deferred;
}());
export { Deferred };
// getDeepFromObject({result: {data: 1}}, 'result.data', 2); // returns 1
export function getDeepFromObject(object, name, defaultValue) {
    if (object === void 0) { object = {}; }
    var keys = name.split('.');
    // clone the object
    var level = deepExtend({}, object);
    keys.forEach(function (k) {
        if (level && typeof level[k] !== 'undefined') {
            level = level[k];
        }
    });
    return typeof level === 'undefined' ? defaultValue : level;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS1hbmRyZXl5b3NodWEvIiwic291cmNlcyI6WyJsaWIvbGliL2hlbHBlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUVuQzs7Ozs7Ozs7R0FRRztBQUNILE1BQU0sQ0FBQyxJQUFNLFVBQVUsR0FBRztJQUFTLGlCQUFzQjtTQUF0QixVQUFzQixFQUF0QixxQkFBc0IsRUFBdEIsSUFBc0I7UUFBdEIsNEJBQXNCOztJQUN2RCxJQUFJLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsRUFBRTtRQUM1RCxPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsSUFBSSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUN4QixPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNyQjtJQUVELElBQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUU1Qix1REFBdUQ7SUFDdkQsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUV0RCxJQUFJLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFFYixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBUTtRQUNwQiwrQ0FBK0M7UUFDL0MsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNqRCxPQUFPO1NBQ1I7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUc7WUFDcEMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGVBQWU7WUFDbEMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFlBQVk7WUFFNUIsdUJBQXVCO1lBQ3ZCLElBQUksR0FBRyxLQUFLLE1BQU0sRUFBRTtnQkFDbEIsT0FBTztnQkFFUDs7O21CQUdHO2FBQ0o7aUJBQU0sSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtnQkFDbEQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztnQkFDbEIsT0FBTztnQkFFUCx5REFBeUQ7YUFDMUQ7aUJBQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUM3QixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM3QixPQUFPO2dCQUVQLHlEQUF5RDthQUMxRDtpQkFBTSxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3hFLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQyxPQUFPO2dCQUVQLDJEQUEyRDthQUM1RDtpQkFBTTtnQkFDTCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDbkMsT0FBTzthQUNSO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUVGO0lBT0U7UUFBQSxpQkFLQztRQUpDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUN6QyxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7O0FBRUQseUVBQXlFO0FBQ3pFLE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxNQUFXLEVBQUUsSUFBWSxFQUFFLFlBQWtCO0lBQTdDLHVCQUFBLEVBQUEsV0FBVztJQUMzQyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLG1CQUFtQjtJQUNuQixJQUFJLEtBQUssR0FBRyxVQUFVLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDO1FBQ2IsSUFBSSxLQUFLLElBQUksT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssV0FBVyxFQUFFO1lBQzVDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEI7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sT0FBTyxLQUFLLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUM3RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xvbmVEZWVwIH0gZnJvbSAnbG9kYXNoJztcblxuLyoqXG4gKiBFeHRlbmRpbmcgb2JqZWN0IHRoYXQgZW50ZXJlZCBpbiBmaXJzdCBhcmd1bWVudC5cbiAqXG4gKiBSZXR1cm5zIGV4dGVuZGVkIG9iamVjdCBvciBmYWxzZSBpZiBoYXZlIG5vIHRhcmdldCBvYmplY3Qgb3IgaW5jb3JyZWN0IHR5cGUuXG4gKlxuICogSWYgeW91IHdpc2ggdG8gY2xvbmUgc291cmNlIG9iamVjdCAod2l0aG91dCBtb2RpZnkgaXQpLCBqdXN0IHVzZSBlbXB0eSBuZXdcbiAqIG9iamVjdCBhcyBmaXJzdCBhcmd1bWVudCwgbGlrZSB0aGlzOlxuICogICBkZWVwRXh0ZW5kKHt9LCB5b3VyT2JqXzEsIFt5b3VyT2JqX05dKTtcbiAqL1xuZXhwb3J0IGNvbnN0IGRlZXBFeHRlbmQgPSBmdW5jdGlvbiguLi5vYmplY3RzOiBBcnJheTxhbnk+KTogYW55IHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAxIHx8IHR5cGVvZiBhcmd1bWVudHNbMF0gIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50c1swXTtcbiAgfVxuXG4gIGNvbnN0IHRhcmdldCA9IGFyZ3VtZW50c1swXTtcblxuICAvLyBjb252ZXJ0IGFyZ3VtZW50cyB0byBhcnJheSBhbmQgY3V0IG9mZiB0YXJnZXQgb2JqZWN0XG4gIGNvbnN0IGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gIGxldCB2YWwsIHNyYztcblxuICBhcmdzLmZvckVhY2goKG9iajogYW55KSA9PiB7XG4gICAgLy8gc2tpcCBhcmd1bWVudCBpZiBpdCBpcyBhcnJheSBvciBpc24ndCBvYmplY3RcbiAgICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHNyYyA9IHRhcmdldFtrZXldOyAvLyBzb3VyY2UgdmFsdWVcbiAgICAgIHZhbCA9IG9ialtrZXldOyAvLyBuZXcgdmFsdWVcblxuICAgICAgLy8gcmVjdXJzaW9uIHByZXZlbnRpb25cbiAgICAgIGlmICh2YWwgPT09IHRhcmdldCkge1xuICAgICAgICByZXR1cm47XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGlmIG5ldyB2YWx1ZSBpc24ndCBvYmplY3QgdGhlbiBqdXN0IG92ZXJ3cml0ZSBieSBuZXcgdmFsdWVcbiAgICAgICAgICogaW5zdGVhZCBvZiBleHRlbmRpbmcuXG4gICAgICAgICAqL1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsICE9PSAnb2JqZWN0JyB8fCB2YWwgPT09IG51bGwpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWw7XG4gICAgICAgIHJldHVybjtcblxuICAgICAgICAvLyBqdXN0IGNsb25lIGFycmF5cyAoYW5kIHJlY3Vyc2l2ZSBjbG9uZSBvYmplY3RzIGluc2lkZSlcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gY2xvbmVEZWVwKHZhbCk7XG4gICAgICAgIHJldHVybjtcblxuICAgICAgICAvLyBvdmVyd3JpdGUgYnkgbmV3IHZhbHVlIGlmIHNvdXJjZSBpc24ndCBvYmplY3Qgb3IgYXJyYXlcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNyYyAhPT0gJ29iamVjdCcgfHwgc3JjID09PSBudWxsIHx8IEFycmF5LmlzQXJyYXkoc3JjKSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IGRlZXBFeHRlbmQoe30sIHZhbCk7XG4gICAgICAgIHJldHVybjtcblxuICAgICAgICAvLyBzb3VyY2UgdmFsdWUgYW5kIG5ldyB2YWx1ZSBpcyBvYmplY3RzIGJvdGgsIGV4dGVuZGluZy4uLlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBkZWVwRXh0ZW5kKHNyYywgdmFsKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuZXhwb3J0IGNsYXNzIERlZmVycmVkIHtcblxuICBwcm9taXNlOiBQcm9taXNlPGFueT47XG5cbiAgcmVzb2x2ZTogYW55O1xuICByZWplY3Q6IGFueTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLnJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgdGhpcy5yZWplY3QgPSByZWplY3Q7XG4gICAgfSk7XG4gIH1cbn1cblxuLy8gZ2V0RGVlcEZyb21PYmplY3Qoe3Jlc3VsdDoge2RhdGE6IDF9fSwgJ3Jlc3VsdC5kYXRhJywgMik7IC8vIHJldHVybnMgMVxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZXBGcm9tT2JqZWN0KG9iamVjdCA9IHt9LCBuYW1lOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IGFueSkge1xuICBjb25zdCBrZXlzID0gbmFtZS5zcGxpdCgnLicpO1xuICAvLyBjbG9uZSB0aGUgb2JqZWN0XG4gIGxldCBsZXZlbCA9IGRlZXBFeHRlbmQoe30sIG9iamVjdCk7XG4gIGtleXMuZm9yRWFjaCgoaykgPT4ge1xuICAgIGlmIChsZXZlbCAmJiB0eXBlb2YgbGV2ZWxba10gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBsZXZlbCA9IGxldmVsW2tdO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHR5cGVvZiBsZXZlbCA9PT0gJ3VuZGVmaW5lZCcgPyBkZWZhdWx0VmFsdWUgOiBsZXZlbDtcbn1cbiJdfQ==