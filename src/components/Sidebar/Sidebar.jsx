import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import PropTypes from "prop-types";
import Filter from "components/Filter/Filter";
import InputRange from "components/Filter/InputRange";

const cx = classNames.bind(styles);

const types_card = [
  "Effect Monster",
  "Flip Effect Monster",
  "Flip Tuner Effect Monster",
  "Gemini Monster",
  "Normal Monster",
  "Normal Tuner Monster",
  "Pendulum Effect Monster",
  "Pendulum Flip Effect Monster",
  "Pendulum Normal Monster",
  "Pendulum Tuner Effect Monster",
  "Ritual Effect Monster",
  "Ritual Monster",
  "Skill Card",
  "Spell Card",
  "Spirit Monster",
  "Toon Monster",
  "Trap Card",
  "Tuner Monster",
  "Union Effect Monster",
  "Fusion Monster",
  "Link Monster",
  "Pendulum Effect Fusion Monster",
  "Synchro Monster",
  "Synchro Pendulum Effect Monster",
  "Synchro Tuner Monster",
  "XYZ Monster",
  "XYZ Pendulum Effect Monster",
];

const races_card = [
  "Aqua",
  "Beast",
  "Beast-Warrior",
  "Creator-God",
  "Cyberse",
  "Dinosaur",
  "Divine-Beast",
  "Dragon",
  "Fairy",
  "Fiend",
  "Fish",
  "Insect",
  "Machine",
  "Plant",
  "Psychic",
  "Pyro",
  "Reptile",
  "Rock",
  "Sea Serpent",
  "Spellcaster",
  "Thunder",
  "Warrior",
  "Winged Beast",
  "Wyrm",
  "Zombie",
  "Normal",
  "Field",
  "Equip",
  "Continuous",
  "Quick-Play",
  "Ritual",
  "Normal",
  "Continuous",
  "Counter",
];

const attributes_card = [
  "DARK",
  "DIVINE",
  "EARTH",
  "FIRE",
  "LIGHT",
  "WATER",
  "WIND",
];

const sorts_card = ["atk", "def", "name", "type", "level", "id", "new"];

const sorts_order_card = ["asc", "desc"];

function Sidebar(props) {
  const { onChange, onResetFilter, filters } = props;

  const handleFilterChange = (value, label) => {
    if (!onChange) return;
    onChange({
      [label.toLowerCase()]: value ? value : undefined,
    });
  };

  const handleClickResetFilter = () => {
    if (!onResetFilter) return;
    onResetFilter();
  };

  return (
    <div className={cx("sidebar")}>
      <div className={cx("filter-box")}>
        <Filter
          list={types_card}
          label="Type"
          onChange={handleFilterChange}
          value={filters?.type}
        />
        <Filter
          list={races_card}
          label="Race"
          onChange={handleFilterChange}
          value={filters?.race}
        />
        <Filter
          list={attributes_card}
          label="Attribute"
          onChange={handleFilterChange}
          value={filters?.attribute}
        />
        <Filter
          list={sorts_card}
          label="Sort"
          onChange={handleFilterChange}
          value={filters?.sort}
        />
        <Filter
          list={sorts_order_card}
          label="SortOrder"
          onChange={handleFilterChange}
          value={filters?.sortorder}
        />

        <InputRange
          max={5000}
          min={0}
          step={50}
          onChange={handleFilterChange}
          label="ATK"
          defaultValue={filters?.atk}
        />

        <InputRange
          max={5000}
          min={0}
          step={50}
          onChange={handleFilterChange}
          label="DEF"
          defaultValue={filters?.def}
        />

        <InputRange
          max={12}
          min={0}
          step={1}
          onChange={handleFilterChange}
          label="Level"
        />

        <button onClick={handleClickResetFilter}>Reset Filter</button>
      </div>
    </div>
  );
}

Sidebar.propTypes = {};

export default Sidebar;
