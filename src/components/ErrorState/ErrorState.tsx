export type ErrorStateProps = {
    text?: string
}

const ErrorState = (props: ErrorStateProps) => {

    const { text = 'Ocorreu um erro' } = props;

    return(
        <div>
            {text}
        </div>
    );
}

export default ErrorState