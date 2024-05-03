export default (params: Parameter) => {
    console.log(params);
    return (
        <div>
            <h2>Member : {params.params.id}</h2>
        </div>
    );
};

interface Parameter {
    params: {
        id: string
    },
};