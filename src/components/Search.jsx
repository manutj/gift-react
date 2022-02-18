const Search = ({ getGifts }) => (
    <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
            Buscar gift
        </span>
        <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => {
                getGifts(e.target.value);
            }}
        />
    </div>
);

export { Search };
