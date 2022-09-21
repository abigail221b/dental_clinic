const SearchPatientForm = () => {
    return (
        <form>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="date" />
            <input type="text" placeholder="Phone Number" />
            <button>Search</button>
        </form>
    );
}

export default SearchPatientForm;