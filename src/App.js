import logo from './logo.svg';
import './App.css';

function App() {
  return (
 <div class="container">
	<div class="row col3">
		<div class="col-md-12"><h1 class="text-right">0</h1></div>
	</div>
	<div class="row" >
		<div class="col-md-3 col1"><h1>AC</h1></div>
		<div class="col-md-3 col1"><h1>+/-</h1></div>
		<div class="col-md-3 col1"><h1>%</h1></div>
		<div class="col-md-3 col2"><h1>÷</h1></div>
	</div>
	<div class="row">
		<div class="col-md-3 col1"><h1>7</h1></div>
		<div class="col-md-3 col1"><h1>8</h1></div>
		<div class="col-md-3 col1"><h1>9</h1></div>
		<div class="col-md-3 col2"><h1>×</h1></div>
	</div>
	<div class="row">
		<div class="col-md-3 col1"><h1>4</h1></div>
		<div class="col-md-3 col1"><h1>5</h1></div>
		<div class="col-md-3 col1"><h1>6</h1></div>
		<div class="col-md-3 col2"><h1>-</h1></div>
	</div>
	<div class="row">
		<div class="col-md-3 col1"><h1>1</h1></div>
		<div class="col-md-3 col1"><h1>2</h1></div>
		<div class="col-md-3 col1"><h1>3</h1></div>
		<div class="col-md-3 col2"><h1>+</h1></div>
	</div>
	
     <div class="row">
     	<div class="col-md-6 col1"><h1>0</h1></div>
     	<div class="col-md-3 col1"><h1>.</h1></div>
     	<div class="col-md-3 col2"><h1>=</h1></div>
     </div>
</div>
  );
}

export default App;
