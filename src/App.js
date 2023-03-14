//импортируем компоненты Person

import Person from "./Person";

//создаем компонент App
function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      
      <Person firstName="Sanjar" lastName="Bakytov" age={19}>
      loves reading books and <strong>running </strong> in the morning
      </Person>
      <Person firstName="Bakyt" lastName="Bakytov" age={40}>
        loves reading books and <strong>running</strong>  in the morning
        </Person>
      <Person firstName="Aijan" lastName="Bakytov"age={30}>
        loves reading books and <strong>running</strong>  in the morning
        </Person>
      
    </div>
  );
}
//экспортируем компонент App
export default App;

