const Debouncing = () => {
	const [search, setSearch] = useState("");

	const fetchData = () => {
		try {
			const res = axios.get(`http://localhost:8080/data?q=${search}`);
			setData(res.data)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		const delay = setTimeout(() => {
			fetchData();
		}, 1000)
		return () => clearInterval(delay)
	}, [search])

	return (
		<div>
			<input
				type="text"
				placeholder="Search"
				onChange={(e) => setSearch(e.target.value)}
			/>
			<div>
				{data.map((e, ind) => (
					<div key={ind}>
						<h3>Name: {e.name}</h3>
						<p>Address: {e.address}</p>
					</div>
				))}
			</div>
		</div>
	);
}