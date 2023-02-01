#### small

The *small* type is useful for text that must not take up as much screen space as a [paragraph]($paragraph) would. But one must be wary of this, if you want to "hide" that information, why even put it there in the first place? I would advise replacing this with other ways of conveying the same information.

There are times when there's an obligation for it to be visible as text, like the Terms and Conditions or Privacy Policy links. Even though, the *small* text type must rarely be used and must **avoid using extensive text and limit its content to a few words only.**

* Component
  ```html
<Text type="small">THE MILLENNIUM FULCRUM EDITION 3.0</Text>
```
* Style
  ```css
span.small {
	font-size: 1.8rem;
	line-height: 2.1rem;
	font-weight: 400;
}
```
* Example with visible margins