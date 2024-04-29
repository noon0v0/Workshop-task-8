let api = "https://open.er-api.com/v6/latest/USD"
let last_update_time_string;
let next_update_time_string;
let rate_table;
let table_keys;
let dropdown;
let select_option;

async function getApi(){
  let data = await fetch(api);
  let j_data = await data.json();
  last_update_time_string = await j_data.time_last_update_utc
  next_update_time_string = await j_data.time_next_update_utc
  rate_table = await j_data.rates;
  table_keys = Object.keys(rate_table);
  for(let i = 0; i < table_keys.length; i++){
    dropdown.option(table_keys[i]);
  }
  select_option = table_keys[0];
}

function setup() {
  createCanvas(400, 400);
  dropdown = createSelect();
  dropdown.position(10, 70);
  getApi();

  dropdown.changed(on_dropdown_change);
}

function draw() {
  background(220);
  textSize(20);
  text("USD Exchange Rate Table", 10, 20);
  textSize(12);
  text("last update time: " + last_update_time_string, 10, 40);
  text("next update time: " + next_update_time_string, 10, 60);

  textSize(30);
  text(select_option + ": " + rate_table[select_option], 10, 140);
}

function on_dropdown_change(){
  select_option = dropdown.value();
}