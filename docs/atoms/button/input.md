### Input button

(Main Page: [Input Button](http://localhost:8000/atoms/input#button)) Using `<input>` in a `<form>` element provides a semantic, compatible, and straightforward solution for interacting with a form. While `<button>` and `<a>` elements have their own advantages and can be used for different purposes, `<input type="button">` is the best choice for buttons that need to submit form data. 

#### `[JSX]` Do
  ```html
<form>
	<Input type="submit"/>
</form>
```
#### `[JSX]` Don't
  ```html
<form>
	<Button onClick={submitForm()}>Submit</Button>
</form>
```