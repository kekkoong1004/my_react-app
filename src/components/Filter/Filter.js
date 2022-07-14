import './Filter.scss';

function Filter (props) {

    const yearFilterHandler = (e) => {
        props.onChangeYear(e.target.value)
    }

    return (
        <div className="filter">
            <div className="filter__control">
                <label>Filter by year</label>
                <select onChange={yearFilterHandler} name='year' id='year'>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    )
}

export default Filter;