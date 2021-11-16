import './styles/body.css';
import './styles/reset.css';
import './App.css';

function App() {
  return (
  <body>
    <div className="wrapper">
        <div className="header">
            <h1 className="header__text">Список заказов</h1>
            <button className="header__button header__button_transparent">
                <svg className="header__icon">
                    <use xlinkHref = "#incorrect"></use>
                </svg>
                <span className="header__button_text">Светлая тема</span>
            </button>
        </div>
        <div className="filter">
           <div className="filter__wrapper">
                <div className="filter__row">
                    <form className="filter__form">
                        <label className="filter__searchbar">
                            <div className="filter__searchbar_item filter__searchbar_item_empty">
                                <div className="filter__searchbar_field">
                                    <svg className="filter__searchbar_icon filter__searchbar_icon_activ">
                                        <use xlinkHref = "#search"></use>
                                    </svg>
                                    <input className="filter__searchbar_place" placeholder="Номер заказа или ФИО" />
                                </div>
                                <button className="filter__searchbar_btn">
                                    <svg className="filter__searchbar_icon">
                                        <use xlinkHref = "#incorrect"></use>
                                    </svg>
                                </button>
                            </div>
                        </label>
                        <button className="filter__button">
                            <svg className="filter__button_icon">
                                <use xlinkHref="#filter"></use>
                            </svg>
                            <span className="filter__button_text">Фильтры</span>
                        </button>
                        <button className="filter__button filter__button_discharge">
                            <span className="filter__button_text">Сбросить фильтры</span>
                        </button>
                    </form>
                    <div className="filter__loading">
                        <svg className="filter__loading_icon">
                            <use xlinkHref="#refresh"></use>
                        </svg>
                        <span className="filter__loading_text">Загрузка</span>
                    </div>
                </div>
            </div>
            <div className="filter__wrapper">
                <form className="filter__content">
                    <div className="filter__input">
                        <label className="filter__input_start">
                            <span clasNames="filter__input_title">Дата оформления</span>
                            <div className="filter__input_item filter__input_item_empty">
                                <input className="filter__input_place" placeholder="dd.mm.dddd" value="20.01.2021" />
                                <button className="filter__input_button">
                                    <svg className="filter__input_icon filter__input_icon_incorrect">
                                        <use xlinkHref = "#incorrect"></use>
                                    </svg>
                                </button>
                            </div>
                        </label>
                        <label className="filter__input_end">
                            <div className="filter__input_item filter__input_item_empty">
                                <input className="filter__input_place" placeholder="dd.mm.dddd" />
                                <button className="filter__input_button">
                                    <svg className="filter__input_icon">
                                        <use xlinkHref = "#incorrect"></use>
                                    </svg>
                                </button>
                            </div>
                        </label>
                    </div>
                    <div className="filter__input">
                        <ul className="filter__dropdowns">
                            <li className="filter__dropdowns_item">
                                <label className="filter__dropdowns_start">
                                    <div className="filter__dropdowns_checkbox">
                                        <input clasNames="filter__dropdowns_input" type="checkbox" />
                                        <svg className="filter__dropdowns_icon">
                                            <use xlinkHref = "#checkmark"></use>
                                        </svg>
                                    </div>
                                    <span className="filter__dropdowns_input_title">Новый</span>
                                </label>
                            </li>
                            <li className="filter__dropdowns_item">
                                <label className="filter__dropdowns_start">
                                    <div className="filter__dropdowns_checkbox">
                                        <input className="filter__dropdowns_input" type="checkbox" />
                                        <svg className="filter__dropdowns_icon">
                                            <use xlinkHref = "#checkmark"></use>
                                        </svg>
                                    </div>
                                    <span className="filter__dropdowns_input_title">Рассчет</span>
                                </label>
                            </li>
                            <li className="filter__dropdowns_item">
                                <label className="filter__dropdowns_start">
                                    <div className="filter__dropdowns_checkbox">
                                        <input className="filter__dropdowns_input" type="checkbox" />
                                        <svg className="filter__dropdowns_icon">
                                            <use xlinkHref = "#checkmark"></use>
                                        </svg>
                                    </div>
                                    <span className="filter__dropdowns_input_title">Подтвержден</span>
                                </label>
                            </li>
                            <li className="filter__dropdowns_item">
                                <label className="filter__dropdowns_start">
                                    <div className="filter__dropdowns_checkbox">
                                        <input className="filter__dropdowns_input" type="checkbox" />
                                        <svg className="filter__dropdowns_icon">
                                            <use xlinkHref = "#checkmark"></use>
                                        </svg>
                                    </div>
                                    <span className="filter__dropdowns_input_title">Отложен</span>
                                </label>
                            </li>
                            <li className="filter__dropdowns_item"><label class="filter__dropdowns_start">
                                <div className="filter__dropdowns_checkbox">
                                    <input className="filter__dropdowns_input" type="checkbox" />
                                    <svg className="filter__dropdowns_icon">
                                        <use xlinkHref = "#checkmark"></use>
                                    </svg>
                                </div>
                                <span className="filter__dropdowns_input_title">Выполнен</span>
                            </label></li>
                            <li className="filter__dropdowns_item">
                                <label className="filter__dropdowns_start">
                                    <div className="filter__dropdowns_checkbox">
                                        <input className="filter__dropdowns_input" type="checkbox" />
                                        <svg className="filter__dropdowns_icon">
                                            <use xlinkHref = "#checkmark"></use>
                                        </svg>
                                    </div>
                                    <span className="filter__dropdowns_input_title">Отменен</span>
                                </label>
                            </li>
                        </ul> 
                        <label className="filter__input_start">
                            <span className="filter__input_title">Статус заказа</span>
                            <div className="filter__input_item filter__input_item_empty filter__input_long">
                                <input className="filter__input_place" placeholde="Статус заказа" value="Любой" />
                                <button className="filter__input_button">
                                    <svg className="filter__input_icon_dropdowns filter__input_icon">
                                        <use xlinkHref = "#v_arrow"></use>
                                    </svg>
                                </button>
                            </div>
                        </label>
                    </div>
                    <div className="filter__input">
                        <label className="filter__input_start">
                            <span className="filter__input_title">Сумма заказа</span>
                            <div className="filter__input_item filter__input_item_empty filter__input_item_short">
                                <input className="filter__input_place" placeholder="5000" />
                                <button className="filter__input_button">
                                    <svg className="filter__input_icon filter__input_icon_incorrect">
                                        <use xlinkHref = "#incorrect"></use>
                                    </svg>
                                </button>
                            </div>
                        </label>
                        <label className="filter__input_end">
                            <div className="filter__input_item filter__input_item_empty filter__input_item_short">
                                <input className="filter__input_place" placeholder="₽" />
                                <button className="filter__input_button">
                                    <svg className="filter__input_icon">
                                        <use xlinkHref = "#incorrect"></use>
                                    </svg>
                                </button>
                            </div>
                        </label>
                    </div>
                    <button className="filter__button filter__button_discharge filter__button_short">
                        <span className="filter__button_text">Применить</span>
                    </button>
                </form>
            </div>
       </div>
       <div className="table">
          <div className="table__header">
              <ul className="table__header_row">
                  <li className="table__header_item">
                      <label className="table__header_checkbox">
                          <div className="table__checkbox">
                              <input type="checkbox" className="table__checkbox_input" />
                              <svg className="table__header_icon">
                                  <use xlinkHref="checkmark"></use>
                              </svg>
                          </div>
                      </label>
                  </li>
                  <li className="table__header_item">
                      <span className="table__header_item_text">#</span>
                  </li>
                  <li className="table__header_item">
                      <span className="table__header_item_text">Дата</span>
                      <svg className="table__header_icon table__header_icon_active">
                          <use xlinkHref="v_arrow"></use>
                      </svg>
                  </li>
                  <li className="table__header_item">
                      <span className="table__header_item_text">Статус</span>
                      <svg className="table__header_icon table__header_icon_active">
                          <use xlinkHref="v_arrow"></use>
                      </svg>
                  </li>
                  <li className="table__header_item">
                      <span className="table__header_item_text">Позиций</span>
                      <svg className="table__header_icon table__header_icon_active">
                          <use xlinkHref="v_arrow"></use>
                      </svg>
                  </li>
                  <li className="table__header_item">
                      <span className="table__header_item_text">Сумма</span>
                      <svg className="table__header_icon table__header_icon_active">
                          <use xlinkHref="v_arrow"></use>
                      </svg>
                  </li>
                  <li className="table__header_item">
                      <span className="table__header_item_text">ФИО покупателя</span>
                  </li>
              </ul>
          </div>
          <div className="table__body">
              <ul className="table__body_row">
                  <li className="table__body_item">
                      <label className="table__body_checkbox">
                          <ul className="table__body_components">
                              <li className="table__header_item">
                                  <div className="table__checkbox">
                                      <input type="checkbox" class="table__checkbox_input" />
                                      <svg className="table__header_icon">
                                          <use xlinkHref="checkmark"></use>
                                      </svg>
                                  </div>
                              </li>
                              <li className="table__header_item">
                                  <span className="table__header_item_text">1270989</span>
                              </li>
                              <li className="table__header_item">
                                  <span className="table__header_item_text">15.02.2021, 18:00</span>
                              </li>
                              <li className="table__header_item">
                                  <svg className="table__header_icon table__header_icon_orange">
                                      <use xlinkHref="#dot"></use>
                                  </svg>
                                  <span className="table__header_item_text">Новый</span>
                              </li>
                              <li className="table__header_item">
                                  <span className="table__header_item_text">6</span>
                              </li>
                              <li class="table__header_item">
                                  <span className="table__header_item_text">101907</span>
                              </li>
                              <li className="table__header_item">
                                  <span className="table__header_item_text">Чернышев Филипп Семёнович</span>
                              </li>
                          </ul>
                      </label>
                  </li>
                  <li className="table__body_item">
                      <label className="table__body_checkbox">
                          <ul className="table__body_components">
                              <li className="table__header_item">
                                  <div className="table__checkbox">
                                      <input type="checkbox" className="table__checkbox_input" />
                                      <svg className="table__header_icon">
                                          <use xlinkHref="checkmark"></use>
                                      </svg>
                                  </div>
                              </li>
                              <li className="table__header_item">
                                  <span className="table__header_item_text">2353474</span>
                              </li>
                              <li className="table__header_item">
                                  <span className="table__header_item_text">12.03.2021, 05:15</span>
                              </li>
                              <li className="table__header_item">
                                  <svg className="table__header_icon table__header_icon_orange">
                                      <use xlinkHref="#dot"></use>
                                  </svg>
                                  <span className="table__header_item_text">Новый</span>
                              </li>
                              <li className="table__header_item">
                                  <span className="table__header_item_text">2</span>
                              </li>
                              <li className="table__header_item">
                                  <span className="table__header_item_text">98003</span>
                              </li>
                              <li className="table__header_item">
                                  <span className="table__header_item_text">Филиппов Степан Васильевич</span>
                              </li>
                          </ul>
                      </label>
                  </li>
                  <li className="table__body_item">
                      <label className="table__body_checkbox">
                          <ul className="table__body_components">
                              <li className="table__header_item">
                                  <div className="table__checkbox">
                                      <input type="checkbox" className="table__checkbox_input" />
                                      <svg className="table__header_icon">
                                          <use xlinkHref="checkmark"></use>
                                      </svg>
                                  </div>
                              </li>
                              <li className="table__header_item">
                                  <span className="table__header_item_text">1103397</span>
                              </li>
                              <li className="table__header_item">
                                  <span className="table__header_item_text">03.02.2021, 08:04</span>
                              </li>
                              <li className="table__header_item">
                                  <svg className="table__header_icon">
                                      <use xlinkHref="#dot"></use>
                                  </svg>
                                  <span className="table__header_item_text">Рассчет</span>
                              </li>
                              <li className="table__header_item">
                                  <span className="table__header_item_text">5</span>
                              </li>
                              <li className="table__header_item">
                                  <span className="table__header_item_text">3800</span>
                              </li>
                              <li className="table__header_item">
                                  <span className="table__header_item_text">Тихонова Алина Давидовна</span>
                              </li>
                          </ul>
                      </label>
                  </li>
                  <li className="table__body_item">
                      <label className="table__body_checkbox">
                          <ul className="table__body_components">
                              <li className="table__header_item">
                                  <div className="table__checkbox">
                                      <input type="checkbox" className="table__checkbox_input" />
                                      <svg className="table__header_icon">
                                          <use xlinkHref="checkmark"></use>
                                      </svg>
                                  </div>
                              </li>
                              <li className="table__header_item">
                                  <span className="table__header_item_text">6924662</span>
                              </li>
                              <li className="table__header_item">
                                  <span className="table__header_item_text">21.01.2021, 13:32</span>
                              </li>
                              <li className="table__header_item">
                                  <svg className="table__header_icon">
                                      <use xlinkHref="#dot"></use>
                                  </svg>
                                  <span className="table__header_item_text">Выполнен</span>
                              </li>
                              <li className="table__header_item">
                                  <span className="table__header_item_text">1</span>
                              </li>
                              <li className="table__header_item">
                                  <span className="table__header_item_text">5700</span>
                              </li>
                              <li className="table__header_item">
                                  <span className="table__header_item_text">Александрова Юлия Никитична</span>
                              </li>
                          </ul>
                      </label>
                  </li>
                  <li className="table__body_item">
                      <label className="table__body_checkbox">
                          <ul className="table__body_components">
                              <li className="table__header_item">
                                  <div className="table__checkbox">
                                      <input type="checkbox" className="table__checkbox_input" />
                                      <svg className="table__header_icon">
                                          <use xlinkHref="checkmark"></use>
                                      </svg>
                                  </div>
                              </li>
                              <li className="table__header_item">
                                  <span className="table__header_item_text">6924662</span>
                              </li>
                              <li className="table__header_item">
                                  <span className="table__header_item_text">21.01.2021, 13:32</span>
                              </li>
                              <li clasNames="table__header_item">
                                  <svg className="table__header_icon">
                                      <use xlinkHref="#dot"></use>
                                  </svg>
                                  <span className="table__header_item_text">Отменен</span>
                              </li>
                              <li className="table__header_item">
                                  <span className="table__header_item_text">-</span>
                              </li>
                              <li className="table__header_item">
                                  <span className="table__header_item_text">-</span>
                              </li>
                              <li class="table__header_item">
                                  <span class="table__header_item_text">Андрей</span>
                              </li>
                          </ul>
                      </label>
                  </li>
                  <li className="table__body_item">
                      <label className="table__body_checkbox">
                          <ul className="table__body_components">
                              <li className="table__header_item">
                                  <div className="table__checkbox">
                                      <input type="checkbox" className="table__checkbox_input" />
                                      <svg className="table__header_icon">
                                          <use xlinkHref="checkmark"></use>
                                      </svg>
                                  </div>
                              </li>
                              <li className="table__header_item">
                                  <span className="table__header_item_text">2842064</span>
                              </li>
                              <li className="table__header_item">
                                  <span className="table__header_item_text">04.01.2021, 12:12</span>
                              </li>
                              <li className="table__header_item">
                                  <svg className="table__header_icon">
                                      <use xlinkHref="#dot"></use>
                                  </svg>
                                  <span className="table__header_item_text">Отложен</span>
                              </li>
                              <li className="table__header_item">
                                  <span className="table__header_item_text">1</span>
                              </li>
                              <li className="table__header_item">
                                  <span className="table__header_item_text">20500</span>
                              </li>
                              <li className="table__header_item">
                                  <span className="table__header_item_text">Судакова Анастасия Ильинична</span>
                              </li>
                          </ul>
                      </label>
                  </li>
                  <li className="table__body_item">
                      <label className="table__body_checkbox">
                          <ul className="table__body_components">
                              <li className="table__header_item">
                                  <div className="table__checkbox">
                                      <input type="checkbox" className="table__checkbox_input" />
                                      <svg className="table__header_icon">
                                          <use xlinkHref="checkmark"></use>
                                      </svg>
                                  </div>
                              </li>
                              <li className="table__header_item">
                                  <span className="table__header_item_text">1730071</span>
                              </li>
                              <li className="table__header_item">
                                  <span className="table__header_item_text">17.12.2020, 22:45</span>
                              </li>
                              <li className="table__header_item">
                                  <svg className="table__header_icon">
                                      <use xlinkHref="#dot"></use>
                                  </svg>
                                  <span className="table__header_item_text">Выполнен</span>
                              </li>
                              <li className="table__header_item">
                                  <span className="table__header_item_text">1</span>
                              </li>
                              <li className="table__header_item">
                                  <span className="table__header_item_text">1399</span>
                              </li>
                              <li className="table__header_item">
                                  <span className="table__header_item_text">Зверева Арина Николаевна</span>
                              </li>
                          </ul>
                      </label>
                  </li>
                  <li className="table__body_item">
                      <label className="table__body_checkbox">
                          <ul className="table__body_components">
                              <li className="table__header_item">
                                  <div className="table__checkbox">
                                      <input type="checkbox" className="table__checkbox_input" />
                                      <svg className="table__header_icon">
                                          <use xlinkHref="checkmark"></use>
                                      </svg>
                                  </div>
                              </li>
                              <li className="table__header_item">
                                  <span className="table__header_item_text">7987376</span>
                              </li>
                              <li className="table__header_item">
                                  <span className="table__header_item_text">17.12.2020, 08:57</span>
                              </li>
                              <li className="table__header_item">
                                  <svg className="table__header_icon">
                                      <use xlinkHref="#dot"></use>
                                  </svg>
                                  <span className="table__header_item_text">Выполнен</span>
                              </li>
                              <li className="table__header_item">
                                  <span className="table__header_item_text">3</span>
                              </li>
                              <li className="table__header_item">
                                  <span className="table__header_item_text">117810</span>
                              </li>
                              <li className="table__header_item">
                                  <span className="table__header_item_text">Карташов Максим Кириллович</span>
                              </li>
                          </ul>
                      </label>
                  </li>
                  <li className="table__body_item">
                      <label className="table__body_checkbox">
                          <ul className="table__body_components">
                              <li className="table__header_item">
                                  <div className="table__checkbox">
                                      <input type="checkbox" class="table__checkbox_input" />
                                      <svg className="table__header_icon">
                                          <use xlinkHref="checkmark"></use>
                                      </svg>
                                  </div>
                              </li>
                              <li className="table__header_item">
                                  <span className="table__header_item_text">1373265</span>
                              </li>
                              <li className="table__header_item">
                                  <span className="table__header_item_text">15.11.2020, 14:26</span>
                              </li>
                              <li className="table__header_item">
                                  <svg className="table__header_icon">
                                      <use xlinkHref="#dot"></use>
                                  </svg>
                                  <span className="table__header_item_text">Выполнен</span>
                              </li>
                              <li className="table__header_item">
                                  <span className="table__header_item_text">1</span>
                              </li>
                              <li className="table__header_item">
                                  <span className="table__header_item_text">17008</span>
                              </li>
                              <li className="table__header_item">
                                  <span className="table__header_item_text">Васильев Вадим Даниилович</span>
                              </li>
                          </ul>
                      </label>
                  </li>
                  <li className="table__body_item">
                      <label className="table__body_checkbox">
                          <ul className="table__body_components">
                              <li className="table__header_item">
                                  <div className="table__checkbox">
                                      <input type="checkbox" class="table__checkbox_input" />
                                      <svg className="table__header_icon">
                                          <use xlinkHref="checkmark"></use>
                                      </svg>
                                  </div>
                              </li>
                              <li clasNames="table__header_item">
                                  <span className="table__header_item_text">1311100</span>
                              </li>
                              <li className="table__header_item">
                                  <span className="table__header_item_text">07.11.2020, 18:52</span>
                              </li>
                              <li className="table__header_item">
                                  <svg className="table__header_icon">
                                      <use xlinkHref="#dot"></use>
                                  </svg>
                                  <span className="table__header_item_text">Отменен</span>
                              </li>
                              <li className="table__header_item">
                                  <span className="table__header_item_text">-</span>
                              </li>
                              <li className="table__header_item">
                                  <span className="table__header_item_text">-</span>
                              </li>
                              <li className="table__header_item">
                                  <span className="table__header_item_text">София</span>
                              </li>
                          </ul>
                      </label>
                  </li>
              </ul>
          </div>
          <div className="table__footer">
              <form className="table__footer_form">
                  <span className="table__footer_text">Выбрано записей: 5</span>
                  <button className="table__footer_button">
                      <svg className="table__footer_icon">
                          <use xlinkHref="#pencil"></use>
                      </svg>
                      <span className="table__footer_text_btn">Изменить статус</span>
                  </button>
                  <button className="table__footer_button table__footer_button_delete">
                      <svg className="table__footer_icon">
                          <use xlinkHref="#bin"></use>
                      </svg>
                      <span className="table__footer_text_btn">Удалить</span>
                  </button>
              </form>
              <form className="table__footer_dropdowns">
                  <span className="table__dropdowns_question">Удалить n зписей?</span>
                  <button className="table__dropdowns_btn table__dropdowns_btn_transparent">
                      <span className="table__dropdowns_btn_text">Удалить</span>
                  </button>
                  <button className="table__dropdowns_btn">
                      <span className="table__dropdowns_btn_text">Отмена</span>
                  </button>
              </form>
              <div className="table__footer_page">
                  <form clasNames="table__footer_page_form">
                      <button className="table__footer_button table__footer_button_small">
                          <span className="table__footer_text_btn">1</span>
                      </button>
                      <button className="table__footer_button table__footer_button_small table__footer_button_transparent">
                          <span className="table__footer_text_btn">2</span>
                      </button>
                      <button className="table__footer_button table__footer_button_small table__footer_button_transparent">
                          <span className="table__footer_text_btn">3</span>
                      </button>
                      <span className="table__footer_text_span">...</span>
                      <button className="table__footer_button table__footer_button_small table__footer_button_transparent">
                          <span className="table__footer_text_btn">18</span>
                      </button>
                  </form>
                  <button className="table__footer_button table__footer_button_small table__footer_button_transparent">
                      <span className="table__footer_text_btn">#</span>
                  </button>
              </div>
          </div> 
      </div>
  </div>
  <svg class="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">

    <symbol id="incorrect" viewBox="0 0 16 16">
        <path id="incorrect" fill="none" d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5"/>
    </symbol>

    <symbol id="disabled" viewBox="0 0 16 16">
        <path id="disabled" fill-rule="evenodd" clip-rule="evenodd" d="M4 5C4 2.79086 5.79086 1 8 1C10.2091 1 12 2.79086 12 5V7C13.1046 7 14 7.89543 14 9V13C14 14.1046 13.1046 15 12 15H4C2.89543 15 2 14.1046 2 13V9C2 7.89543 2.89543 7 4 7V5ZM10 5V7H6V5C6 3.89543 6.89543 3 8 3C9.10457 3 10 3.89543 10 5Z" stroke="none"/>
        <path d="M12 5C12 2.8 10.2 1 8 1C5.8 1 4 2.8 4 5L4 9H6V5C6 3.75 7 3 8 3C9 3 10 3.75 10 5V9H12V5Z" stroke="none"/>
    </symbol>

    <symbol id="search" viewBox="0 0 16 16">
    <path fill="none" d="M10.0355 10.0355C11.9882 8.08291 11.9882 4.91709 10.0355 2.96447C8.08291 1.01184 4.91709 1.01184 2.96447 2.96447C1.01184 4.91709 1.01184 8.08291 2.96447 10.0355C4.91709 11.9882 8.08291 11.9882 10.0355 10.0355ZM10.0355 10.0355L14 14M14 14L14.5 13.5L11.5 10.5M14 14L13.5 14.5L10.5 11.5" />
    </symbol>

    <symbol id="filter" viewBox="0 0 16 16">
        <path d="M12 4H4V5.5L7 8.5V12L9 13V8.5L12 5.5V4Z" stroke="none"/>
    </symbol>

    <symbol id="sun" viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="4" stroke="none"/>
        <path d="M15 9L16 8L15 7H13V9H15Z" stroke="none"/>
        <path d="M1 9L0 8L1 7H3V9H1Z" stroke="none"/>
        <path d="M7 15L8 16L9 15V13H7V15Z" stroke="none"/>
        <path d="M7 1L8 0L9 1V3H7V1Z" stroke="none"/>
        <path d="M12.5 14H14L14 12.5L12.5 11L11 12.5L12.5 14Z" stroke="none"/>
        <path d="M2 3.5L2 2L3.5 2L5 3.5L3.5 5L2 3.5Z" stroke="none"/>
        <path d="M3.5 14H2L2 12.5L3.5 11L5 12.5L3.5 14Z" stroke="none"/>
        <path d="M14 3.5V2L12.5 2L11 3.5L12.5 5L14 3.5Z" stroke="none"/>
    </symbol>
    <symbol id="refresh" viewBox="0 0 16 16">
        <path d="M2.50251 7.5V8.5C2.50251 10.75 4.75251 13.5 8.00251 13.5C10 13.5 11.6187 12.5 12.6 11" fill="none"/>
        <path d="M13.5 8.5V7.5C13.5 5.25 11.25 2.5 7.99997 2.5C6 2.5 4.38135 3.5 3.4 5" fill="none"/>
        <path d="M4.5 9.5L2.50254 7.5L0.752533 9.75" fill="none"/>
        <path d="M11.5 6.5L13.5 8.5L15.25 6.25" fill="none"/>
    </symbol>

    <symbol id="v_arrow" viewBox="0 0 16 16">
        <path d="M5 6H11V6.5L8.25 11H7.75L5 6.5V6Z" stroke="none"/>
    </symbol>

    <symbol id="checkmark" viewBox="0 0 16 16">
        <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
    </symbol>

    <symbol id="pencil" viewBox="0 0 16 16">
        <path d="M6 14.5H15" fill="none"/>
        <path d="M5 13L1.5 14.5L3 11M5 13L3 11M5 13L12 6M3 11L10 4M11 3L12.5 1.5L14.5 3.5L13 5M11 3L13 5M11 3L10 4M13 5L12 6M12 6L10 4" fill="none"/>
    </symbol>

    <symbol id="bin" viewBox="0 0 16 16">
        <path d="M2 3.5H3.5M14 3.5H12.5M5.5 3.5H10.5M5.5 3.5V2.5C5.5 1.94772 5.94772 1.5 6.5 1.5H9.5C10.0523 1.5 10.5 1.94772 10.5 2.5V3.5M5.5 3.5H3.5M10.5 3.5H12.5M3.5 3.5V13.5C3.5 14.0523 3.94772 14.5 4.5 14.5H11.5C12.0523 14.5 12.5 14.0523 12.5 13.5V3.5" fill="none" stroke-linecap="round"/>
        <path d="M6.5 6V12M9.5 6V12" fill="none" stroke-linecap="round"/>
    </symbol>

    <symbol id="dot" viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="4" stroke="none"/>
    </symbol>

    <symbol id="abort" viewBox="0 0 16 16">
        <path d="M12.5 12.5L3.5 3.5" fill="none"/>
        <circle cx="8" cy="8" r="6.5" fill="none"/>
    </symbol>
</svg>
   <svg class="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">

    <symbol id="incorrect" viewBox="0 0 16 16">
        <path id="incorrect" fill="none" d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5"/>
    </symbol>

    <symbol id="disabled" viewBox="0 0 16 16">
        <path id="disabled" fill-rule="evenodd" clip-rule="evenodd" d="M4 5C4 2.79086 5.79086 1 8 1C10.2091 1 12 2.79086 12 5V7C13.1046 7 14 7.89543 14 9V13C14 14.1046 13.1046 15 12 15H4C2.89543 15 2 14.1046 2 13V9C2 7.89543 2.89543 7 4 7V5ZM10 5V7H6V5C6 3.89543 6.89543 3 8 3C9.10457 3 10 3.89543 10 5Z" stroke="none"/>
        <path d="M12 5C12 2.8 10.2 1 8 1C5.8 1 4 2.8 4 5L4 9H6V5C6 3.75 7 3 8 3C9 3 10 3.75 10 5V9H12V5Z" stroke="none"/>
    </symbol>

    <symbol id="search" viewBox="0 0 16 16">
    <path fill="none" d="M10.0355 10.0355C11.9882 8.08291 11.9882 4.91709 10.0355 2.96447C8.08291 1.01184 4.91709 1.01184 2.96447 2.96447C1.01184 4.91709 1.01184 8.08291 2.96447 10.0355C4.91709 11.9882 8.08291 11.9882 10.0355 10.0355ZM10.0355 10.0355L14 14M14 14L14.5 13.5L11.5 10.5M14 14L13.5 14.5L10.5 11.5" />
    </symbol>

    <symbol id="filter" viewBox="0 0 16 16">
        <path d="M12 4H4V5.5L7 8.5V12L9 13V8.5L12 5.5V4Z" stroke="none"/>
    </symbol>

    <symbol id="sun" viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="4" stroke="none"/>
        <path d="M15 9L16 8L15 7H13V9H15Z" stroke="none"/>
        <path d="M1 9L0 8L1 7H3V9H1Z" stroke="none"/>
        <path d="M7 15L8 16L9 15V13H7V15Z" stroke="none"/>
        <path d="M7 1L8 0L9 1V3H7V1Z" stroke="none"/>
        <path d="M12.5 14H14L14 12.5L12.5 11L11 12.5L12.5 14Z" stroke="none"/>
        <path d="M2 3.5L2 2L3.5 2L5 3.5L3.5 5L2 3.5Z" stroke="none"/>
        <path d="M3.5 14H2L2 12.5L3.5 11L5 12.5L3.5 14Z" stroke="none"/>
        <path d="M14 3.5V2L12.5 2L11 3.5L12.5 5L14 3.5Z" stroke="none"/>
    </symbol>
    <symbol id="refresh" viewBox="0 0 16 16">
        <path d="M2.50251 7.5V8.5C2.50251 10.75 4.75251 13.5 8.00251 13.5C10 13.5 11.6187 12.5 12.6 11" fill="none"/>
        <path d="M13.5 8.5V7.5C13.5 5.25 11.25 2.5 7.99997 2.5C6 2.5 4.38135 3.5 3.4 5" fill="none"/>
        <path d="M4.5 9.5L2.50254 7.5L0.752533 9.75" fill="none"/>
        <path d="M11.5 6.5L13.5 8.5L15.25 6.25" fill="none"/>
    </symbol>

    <symbol id="v_arrow" viewBox="0 0 16 16">
        <path d="M5 6H11V6.5L8.25 11H7.75L5 6.5V6Z" stroke="none"/>
    </symbol>

    <symbol id="checkmark" viewBox="0 0 16 16">
        <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
    </symbol>

    <symbol id="pencil" viewBox="0 0 16 16">
        <path d="M6 14.5H15" fill="none"/>
        <path d="M5 13L1.5 14.5L3 11M5 13L3 11M5 13L12 6M3 11L10 4M11 3L12.5 1.5L14.5 3.5L13 5M11 3L13 5M11 3L10 4M13 5L12 6M12 6L10 4" fill="none"/>
    </symbol>

    <symbol id="bin" viewBox="0 0 16 16">
        <path d="M2 3.5H3.5M14 3.5H12.5M5.5 3.5H10.5M5.5 3.5V2.5C5.5 1.94772 5.94772 1.5 6.5 1.5H9.5C10.0523 1.5 10.5 1.94772 10.5 2.5V3.5M5.5 3.5H3.5M10.5 3.5H12.5M3.5 3.5V13.5C3.5 14.0523 3.94772 14.5 4.5 14.5H11.5C12.0523 14.5 12.5 14.0523 12.5 13.5V3.5" fill="none" stroke-linecap="round"/>
        <path d="M6.5 6V12M9.5 6V12" fill="none" stroke-linecap="round"/>
    </symbol>

    <symbol id="dot" viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="4" stroke="none"/>
    </symbol>

    <symbol id="abort" viewBox="0 0 16 16">
        <path d="M12.5 12.5L3.5 3.5" fill="none"/>
        <circle cx="8" cy="8" r="6.5" fill="none"/>
    </symbol>
</svg>
</body>
  );
}

export default App;
