import React  from "react"

export default function SearchMovie() {
    return (
        <form className="form">
            <label calssName="label" htmlFor="quert">Movie Name</label>
            <input className="input" type="text" name="query" placeholder="i.e. Jurassic Park"/>
            <button className="button" type="submit" >Search</button>
        </form>
    )
}