"use client";

function onBackPage() {
    return history.back();
}

export default () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2>Error 🤷‍♂️</h2>
            <button onClick={() => onBackPage()}>뒤로</button>
        </div>
    );
}