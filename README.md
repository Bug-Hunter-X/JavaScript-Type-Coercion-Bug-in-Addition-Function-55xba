# JavaScript Type Coercion Bug

This repository demonstrates a common type coercion bug in JavaScript that can lead to unexpected results when adding numbers. The bug arises when using strict equality (`===`) to check for `null` values.  Strict equality does not perform type coercion, so if a number is 0 it will not be treated as falsy. 

## Bug Description

The `foo` function adds two numbers. If either number is `null`, it returns `null`. However, if either input is `0`, it incorrectly treats it as `null` due to strict equality check. 

## Solution

The solution replaces the strict equality (`===`) with loose equality (`==`) or provides more explicit null checks which are clearer.  The loose equality will treat 0 as a number and correctly add it.  Explicit checking is often preferred for readability and maintainability.