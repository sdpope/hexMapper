import React from "react";

const ManageMaps = () => {

    const [mapList, setMapList] = React.useState(null);
    const [listNeedsUpdate, setListNeedsUpdate] = React.useState(false);


    React.useEffect(() => {
        console.log("Mount manage maps");
        fetch("/getMapList")
        .then(res => res.json())
        .then((res) => {
            console.log(res.data);
            setMapList(res.data);
        })

    },[listNeedsUpdate] );


    return (
        <>Manage Maps here.
            <ul>
                {mapList !== null &&
                    mapList.map((map) => {
                        return (
                            <li key={map._id}>{map.name} {map._id}
                                <button onClick={() => {
                                    fetch(`/deleteMap/${map._id}`, 
                                    { method: "DELETE"})
                                    .then((res) => res.json())
                                    .then((res) => {
                                        console.log(res);
                                        setListNeedsUpdate(!listNeedsUpdate);
                                    })
                                }}>
                                    Delete
                                </button>
                            </li>
                        );
                    })
                }
            </ul>
        </>
    );
}

export default ManageMaps;