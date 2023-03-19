import Expenses from "./components/Expenses";
function App() {
  const expenses = [
    {
      id:'e1',
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id:'e2',
      title:"Car Insurance ",
      amount:199.99,
      date:new Date(2023,2,23)
    },
    {
      id:'e3',
      title:"New Desk (Wodden)",
      amount:67.00,
      date:new Date(2023,6,1)
    },
    {
      id:'e4',
      title:"New Pencil",
      amount:3.00,
      date:new Date(2023,6,1)
    },
  ];

  return (
    <div>
      <h2>Let's get started</h2>
      <Expenses items = {expenses}/>
    </div>
  );
}
export default App;
