import Portal from '~/components/Portal';

function Following() {
    return (
        <div>
            <h2>Following page</h2>
            <Portal target="#publish-btn">
                <button>Save and Publish</button>
            </Portal>
        </div>
    );
}

export default Following;
