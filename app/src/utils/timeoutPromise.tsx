const showError = (_fieldName: string) => {
  {
    return (
      (errors as any)[_fieldName] && (
        <div
          style={{
            color: "red",
            padding: 5,
            paddingLeft: 12,
            fontSize: "smaller"
          }}
        >
          This field is required
        </div>
      )
    );
  }
};