import React from 'react';
import styles from './Dropdown.module.scss';
import classNames from 'classnames';

const values = [
  "Valuawdawdawdawdawde",
  "Valueawdwadwad",
  "Valueawdawdawd",
  "Value22awdawdawdaw"
]

function Dropdown() {
  const [value, setValue] = React.useState(values[0]);
  const [open, setOpen] = React.useState(false);
  const classesOpen = classNames(styles["dropdown"], {[styles["dropdown--active"]]: open})
  return <div className={classesOpen}>
    <div className={styles["dropdown-item--first"]} onClick={() => setOpen(!open)}>
      <span aria-label="first-elem">{value}</span>
    </div>
    {open && 
    <div aria-label="dropdown-list" className={styles["dropdown-items__wrapper"]}>
      {values.map((val, idx) => {
        const classes = classNames(styles["dropdown-item"], {[styles["dropdown-item--active"]]: val === value})
        return (
        <div key={idx} aria-label={`item-elem-${idx}`} className={classes} onClick={() => {
          setValue(val);
          setOpen(false);
        }}>
          <span>{val}</span>
        </div>
      )
      })}
    </div>
    }
  </div>
}

export default Dropdown;