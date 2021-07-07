import Button from "./components/button";
import Input from "./components/input";
function App() {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center px-4 md:px-0 pt-16 md:pt-0">
      <div className="bg-white p-12 w-full sm:w-3/5 xl:w-2/5 shadow rounded-lg">
        <form>
          <div className="w-full flex justify-between items-center">
            <Input type="number" required={true} />
            <span className="text-lg font-bold">+</span>
            <Input type="number" required={true} />
            <span className="text-lg font-bold">=</span>
            <Input type="number" required={true} disabled />
          </div>
          <div className="flex justify-content-end mt-8 justify-end">
            <Button buttonText="Clear" buttonType="reset" className="mr-8" />
            <Button buttonText="Add" buttonType="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
