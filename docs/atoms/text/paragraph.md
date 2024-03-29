#### paragraph

A *paragraph* is the default text type of the component, but it can be explicitly stated even though is a bit redundant. Its size and style are designed to be easily readable and provide a comfortable reading experience. By design, it has a large `line-height`, this so inline code blocks won't create a larger row of text when existing, different from the rest of the paragraph.

#### `[JSX]` Component
  ```html
<Text>By Lewis Caroll</Text>
<Text type="paragraph">By Lewis Caroll</Text>
```

#### `[CSS]` Style
  ```css
span.paragraph {
	font-size: 1.8rem;
	line-height: 2.1rem;
	font-weight: 400;
}
```

* Example with visible margins