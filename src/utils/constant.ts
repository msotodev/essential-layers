export const CORE_EXAMPLE = `public Result<User> GetUser(int id)
{
    if (id <= 0) return Result<User>.Fail("Id inválido");
    var user = _repo.Find(id);
    return Result<User>.Ok(user, "Usuario encontrado");
}`;