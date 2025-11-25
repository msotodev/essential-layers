const e=`app.Services.ConfigureDapper("YOUR_CONNECTION_STRING");`,t=`ResultHelper<TResult> Execute<TResult, TRequest>(
    TRequest request, string storedProcedure
);

Task<ResultHelper<TResult>> ExecuteAsync<TResult, TRequest>(
    TRequest request, string storedProcedure
);

ResultHelper<IEnumerable<TResult>> ExecuteAll<TResult, TRequest>(
    TRequest request, string storedProcedure
);

Task<ResultHelper<IEnumerable<TResult>>> ExecuteAllAsync<TResult, TRequest>(
    TRequest request, string storedProcedure
);

ResultHelper<TResult> ExecuteComplex<TResult, TRequest>(
    TRequest request, string storedProcedure
);

Task<ResultHelper<TResult>> ExecuteComplexAsync<TResult, TRequest>(
    TRequest request, string storedProcedure
);

ResultHelper<IEnumerable<TResult>> ExecuteComplexAll<TResult, TRequest>(
    TRequest request, string storedProcedure
);

Task<ResultHelper<IEnumerable<TResult>>> ExecuteComplexAllAsync<TResult, TRequest>(
    TRequest request, string storedProcedure
);

ResultHelper<IEnumerable<IEnumerable<dynamic>>> ExecuteMultiple<TRequest>(
    TRequest request, string storedProcedure
);

Task<ResultHelper<IEnumerable<IEnumerable<dynamic>>>> ExecuteMultipleAsync<TRequest>(
    TRequest request, string storedProcedure
);

void SetConnection(string connectionString);`,n=`ResultHelper<HashSet<ResultDto>> QueryAll<ResultDto>(
    string query, params object[] parameters
);

Task<ResultHelper<HashSet<ResultDto>>> QueryAllAsync<ResultDto>(
    string query, params object[] parameters
);

ResultHelper<ResultDto> QueryFirst<ResultDto>(
    string query, params object[] parameters
);

Task<ResultHelper<ResultDto>> QueryFirstAsync<ResultDto>(
    string query, params object[] parameters
);`;export{t as n,n as r,e as t};