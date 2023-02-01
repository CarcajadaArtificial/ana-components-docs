### type

The `type` property is the one that changes the text's style. Font sizes were modularly scaled and line heights were rounded and hand-adjusted. Also, anything greater than a paragraph (base text) is set to bold.

#### display

The *display* text type is the largest of them all. It is used for impactful text that requires a larger amount of screenspace to convey an extremely important message. I think things like brand mottos, hot takes, or one-sentence announcement work great for a *display* type. **Avoid this text type on devices with smaller screens.**

* Component
  ```html
<Text type="display">Alice’s Adventures in Wonderland</Text>
```
* Style
  ```css
span.display {
	font-size: 3.8rem;
	line-height: 4rem;
	font-weight: 600;
}
```
* Example with visible margins