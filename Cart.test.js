import CartPageList from "./src/Components/Cart/CartPageList";
import { shallow} from "enzyme";

describe("StartPage", () => {
    it("should have h1 and tag with Guide", () => {
      const wrapper = shallow(<CartPageList />);
      expect(wrapper.find("h1").text()).toBe("YOUR CART");
    });
});



// УЛУЧШЕНИЯ
// 1) Добавить личный кабинет
// 2) Добавить валидацию на форму оплаты
// 3) Усовершенствовать структуру JSON файла
// 

// СЛОЖНОСТИ
// 1) Подобрать цвета и стили
// 2) на старте проекта было сложновато организовать структуру хранения БД, переписывал несколько раз