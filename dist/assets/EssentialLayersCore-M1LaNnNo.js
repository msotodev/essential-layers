import{a as e,o as t,t as n}from"./index-C4zYym_6.js";import"./Icon-C_2H3Uih.js";import{n as r,t as i}from"./Typo-DaozYhxd.js";var a=t(n());function o({children:e}){return(0,a.jsx)(`div`,{children:e})}var s=t(e());function c({children:e,activeIndex:t}){return(0,a.jsx)(`div`,{children:s.Children.map(e,(e,n)=>n===t?e:null)})}function l({children:e,onActive:t,activeIndex:n}){return(0,a.jsx)(`div`,{className:`flex border-b border-gray-600`,children:s.Children.map(e,(e,r)=>s.cloneElement(e,{onClick:()=>t(r),isActive:r===n}))})}function u({children:e,onClick:t,isActive:n}){return(0,a.jsx)(`button`,{className:`py-2 px-4 font-medium focus:outline-none ${n?`border-b-2 border-blue-500 text-blue-500`:`text-gray-400 hover:text-gray-100`}`,onClick:t,children:e})}function d(){let e=[`Cache`,`Extension`,`Handlers`,`Logger`,`Models`,`Result`],[t,n]=(0,s.useState)(0);return(0,a.jsxs)(`div`,{className:`space-y-6 dark:text-white text-gray-700`,children:[(0,a.jsx)(i,{children:`EssentialLayers (Core)`,type:`title`}),(0,a.jsxs)(`p`,{children:[`Basic package with helpers, extensions and the `,(0,a.jsx)(`strong`,{children:`Result`}),` pattern to standardize responses across all layers.`]}),(0,a.jsx)(i,{type:`subtitle`,children:`Definitions`}),(0,a.jsx)(l,{activeIndex:t,onActive:e=>{n(e)},children:e.map(e=>(0,a.jsx)(u,{children:e}))}),(0,a.jsxs)(c,{activeIndex:t,children:[(0,a.jsx)(o,{children:(0,a.jsx)(r,{title:`SimpleMemoryCache.cs`,code:`public class SimpleMemoryCache<TItem>
{
    Task<TItem> GetOrCreate(object key, Func<Task<TItem>> createItem);

    TItem GetOrCreate(object key, TItem item);

    void Remove(string key);
}`})}),(0,a.jsx)(o,{children:(0,a.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,a.jsx)(r,{title:`BooleanExtension.cs`,code:`public static class BooleanExtension
{
	static bool False(this bool self);

	static bool And(this bool self, bool b);

	static bool Or(this bool self, bool b);

	static bool Same(this bool self, bool b);
}`}),(0,a.jsx)(r,{title:`ByteArrayExtension.cs`,code:`public static class ByteArrayExtension
{
	static string Encode(this byte[] self);

	static string ToBase64(this byte[] self);

	static byte[] Compress(this byte[] self, string fileName);

	static byte[] Decompress(this byte[] self);

    static void CompressAndWrite(this byte[] self, string path, string fileName, string extension);

    static void WriteFile(this byte[] self, string path, string fileName, string extension);
}`}),(0,a.jsx)(r,{title:`CharArrayExtension.cs`,code:`public static class CharArrayExtension
{
    static bool MoreThanOneCharacter(this char[] self);

    static bool IsAny(this char value, params char[] values);

    static bool NotAny(this char value, params char[] values);

    static bool IsLetter(this char value);

    static bool IsNumber(this char value);

    static bool IsDigit(this char value);

    static bool IsWhiteSpace(this char value);

    static bool IsUpper(this char value);
}`}),(0,a.jsx)(r,{title:`DateTimeExtension.cs`,code:`public static class DateTimeExtension
{
    static readonly DateTime DEFAULT;

    static string ToShortFormatMX(this DateTime value, bool bWithSlash = true);

    static string ToFullFormatMX(this DateTime value, bool bWithSlash = true);

    static bool IsEqualsToDefault(this DateTime datetime, bool full = true);

    static string EqualsEmpty(this DateTime datetime, string date);

    static string StringDay(this DateTime dateTime, string culture = "es-MX");

    static string StringMonth(this DateTime dateTime, string culture = "es-MX");

    static string StringYear(this DateTime dateTime, string culture = "es-MX");

    static string StringTime(
        this DateTime dateTime, TimeFormat timeFormat = TimeFormat._TWELVE_HOURS,
        bool includeAmPm = true, string culture = "es-MX"
    );

    static string GetTimeFormat(TimeFormat timeFormat);

    public enum TimeFormat
    {
        _TWELVE_HOURS,
        _TWENTY_FOUR_HOURS
    }
}`}),(0,a.jsx)(r,{title:`DecimalExtension.cs`,code:`public static class DecimalExtension
{
    static string ToDecimalCurrency(this decimal value, bool isZeroEmpty = false);

    static decimal Trim(this decimal value, int decimales);
}`}),(0,a.jsx)(r,{title:`IDictionaryExtension.cs`,code:`public static class IDictionaryExtension
{
    static bool SingleOne<TKey, TValue>(this IDictionary<TKey, TValue> dictionary);

    static bool IsEmpty<TKey, TValue>(this IDictionary<TKey, TValue> dictionary);

    static bool NotEmpty<TKey, TValue>(this IDictionary<TKey, TValue> dictionary);

    static Dictionary<TKey, TValue> Copy<TKey, TValue>(this Dictionary<TKey, TValue> dictionary);

    static IDictionary<TKey, TValue> Update<TKey, TValue>(
        this IDictionary<TKey, TValue> dictionary, TKey key, TValue value
    );

    static bool NoContainsKey<TKey, TValue>(
        this IDictionary<TKey, TValue> dictionary, TKey key
    );

    static TValue GetValueBy<TKey, TValue>(
        this IDictionary<TKey, TValue> dictionary, TKey key
    );

    static IDictionary<TValue, TKey> Inverse<TKey, TValue>(
        this IDictionary<TKey, TValue> self
    );
}`}),(0,a.jsx)(r,{title:`IEnumerableExtension.cs`,code:`public static class IEnumerableExtension
{
    static bool IsAny<T>(
        this IEnumerable<T> self, IEnumerable<T> values
    );

    static bool NotAny<T>(
        this IEnumerable<T> self, IEnumerable<T> values
    );

    static bool IsAny<T>(
        this IEnumerable<T> self, params T[] values
    );

    static bool NotAny<T>(
        this IEnumerable<T> self, params T[] values
    );

    static bool IsEmpty<T>(
        this IEnumerable<T> list
    );

    static bool NotEmpty<T>(
        this IEnumerable<T> list
    );

    static bool SingleOne<T>(
        this IEnumerable<T> list
    );

    static bool AddIf<T>(
        this IList<T> lst, T data, Func<T, bool> check
    );

    static bool AreEquals<T, K>(
        this IEnumerable<T> self, IEnumerable<K> other
    );

    static bool NotAny<T>(
        this IEnumerable<T> items, Func<T, bool> predicate
    );

    static string ToStringJoin<T>(
        this IEnumerable<T> self
    );

    static string Join<T>(
        this IEnumerable<T> self, string separator = ", "
    );

    static ObservableCollection<T> ToObservableCollection<T>(
        this IEnumerable<T> self
    );

    static bool TryFirst<T>(this IEnumerable<T> self, out T value);

    static bool TryFirst<T>(
        this IEnumerable<T> self, Func<T, bool> predicate, out T value
    );

    static bool TrySingle<T>(this IEnumerable<T> self, out T value);

    static bool TrySingle<T>(
        this IEnumerable<T> self, Func<T, bool> predicate, out T value
    );
}`}),(0,a.jsx)(r,{title:`IntExtension.cs`,code:`public static class IntExtensions
{
    static bool Between(this int self, int start, int end);

    static bool NotBetween(this int self, int start, int end);

    static bool AreAll(this int self, params int[] values);

    static bool LessThanZero(this int self);

    static string GetMonth(this int self);

    static string GetDay(this int self);

    static bool InRange(this int self, int start, int end);

    static bool NotInRange(this int self, int start, int end);

    static int IndexOfRange(this int self, int[] values);
}`}),(0,a.jsx)(r,{title:`LongExtension.cs`,code:`public static class LongExtension
{
    static bool LessThanZero(this long self);

    static long EqualsLessThanZero(this long self, long def = -1);
}`}),(0,a.jsx)(r,{title:`ObjectExtension.cs`,code:`public static class ObjectExtensions
{
    static IDictionary<string, TValue> ToDictionary<TValue>(this object self);

    static int ToInt(this object self);

    static long ToLong(this object self);

    static ulong ToULong(this object self);

    static DateTime ToDateTime(this object self);

    static decimal ToDecimal(this object self);

    static double ToDouble(this object self);

    static float ToFloat(this object self);

    static short ToShort(this object self);

    static byte ToByte(this object self);

    static bool ToBoolean(this object self);

    static bool IsNull(this object self);

    static bool NotNull(this object self);

    static bool NotEquals(this object self, object other);
}`}),(0,a.jsx)(r,{title:`OptionModelExtension.cs`,code:`public static class OptionModelExtensions
{
    static ObservableCollection<OptionModel> ToOptionModel<T>(
        this IEnumerable<T> self,
        Func<T, string> descriptionSelector,
        Func<T, string> idSelector
    );
}`}),(0,a.jsx)(r,{title:`StreamExtension.cs`,code:`public static class StreamExtension
{
    static Stream Compress(
        this Stream inputStream, string fileName
    );

    static Stream Decompress(
        this Stream compressedStream
    );

    static byte[] ToBytes(
        this Stream stream
    );

    static MemoryStream ToMemoryStream(
        this Stream stream
    );

    static void WriteFile(
        this Stream stream, string fullpath, string filename, Extension extension
    );
}`}),(0,a.jsx)(r,{title:`StringExtension.cs`,code:`public static class StringExtension
{
    static bool IsEmpty(this string self, bool includeWhiteSpaces = false);

    static bool NotEmpty(this string self, bool includeWhiteSpaces = false);

    static bool Match(this string self, string pattern);

    static bool NoMatch(this string self, string pattern);

    static bool NotEquals(this string self, string another);

    static string RegexReplace(this string self, string pattern, string replacement);

    static string Capitalize(this string self, string separator = " ");

    static bool HasDigits(this string self);

    static bool HasLetters(this string self);

    static bool MinLength(this string self, int length);

    static bool Length(this string self, int length);

    static bool MaxLength(this string self, int length);

    static string FirstUpperWord(this string self);

    static string WrapText(this string self, int n, bool wrap = true);

    static string LeftSpaces(this string self, int length);

    static string RightSpaces(this string self, int length);

    static string RemoveDiacritics(this string self);

    static Stream ToStream(this string self)

    static T ConvertToType<T>(string value);

    static byte[] GetBytes(this string self);
}`}),(0,a.jsx)(r,{title:`TExtension.cs`,code:`public static class CharArrayExtension
{
    static bool IsAny<T>(
        this T self, IEnumerable<T> values
    );

    static bool NotAny<T>(
        this T self, IEnumerable<T> values
    );

    static bool IsAny<T>(
        this T self, params T[] values
    );
        
    static bool NotAny<T>(
        this T self, params T[] values
    );
        
    static T DeepCopy<T>(this T self);

    static string Serialize<T>(
        this T self, bool indented = false, bool insensitive = false
    );

    static T Deserialize<T>(
        this string self, bool indented = false, bool insensitive = false
    );
    
    static ResultHelper<string> SerializeResult<T>(
        this T self, bool indented = false, bool insensitive = false
    );

    static ResultHelper<T> DeserializeResult<T>(
        this string self, bool indented, bool insensitive = false
    );

    static bool IsSimpleType<T>(this T self);

    static T SearchProperty<T>(this object obj, params string[] propertyNames);

    static bool NotEquals<T, K>(this T self, K other);

    static bool AreEquals<T, K>(this T self, K other);
}`})]})}),(0,a.jsx)(o,{children:(0,a.jsx)(`div`,{className:`flex flex-col gap-4`,children:(0,a.jsx)(r,{title:`TryHandler.cs`,code:`public class TryHandler
{
    void Try(Action action);

    Task TryAsync(Func<Task> action);
    
    ResultHelper<T> Try<T>(Func<T> action);

    Task<ResultHelper<T>> TryAsync<T>(Func<Task<T>> action);
}`})})}),(0,a.jsx)(o,{children:(0,a.jsx)(`div`,{className:`flex flex-col gap-4`,children:(0,a.jsx)(r,{title:`LoggerHelper.cs`,code:`public class LoggerHelper<T>
{
    static void Debug(Exception e, string message);

    static void Error(Exception e, string message);
    
    static void Info(string message);

    static void Trace(Exception e, string message);

    static void Warning(string message);
}`})})}),(0,a.jsx)(o,{children:(0,a.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,a.jsx)(r,{title:`IntOptionModel.cs`,code:`public class IntOptionModel<T>
{
    string Title { get; set; };

    int Value { get; set; };

    IntOptionModel();

    IntOptionModel(string title, int value);

    static OptionModel Default => new(string.Empty, string.Empty);
}`}),(0,a.jsx)(r,{title:`OptionModel.cs`,code:`public class OptionModel
{
    string Title { get; set; };

    string Value { get; set; };

    OptionModel();

    OptionModel(string title, string value);

    static OptionModel Default => new(string.Empty, string.Empty);
}`}),(0,a.jsx)(r,{title:`TOptionModel.cs`,code:`public class TOptionModel<T>
{
    string Title { get; set; };

    T Value { get; set; };

    TOptionModel();

    TOptionModel(string title, T value);

    static TOptionModel<T> Default => new(string.Empty, default);
}`})]})}),(0,a.jsx)(o,{children:(0,a.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,a.jsx)(r,{title:`Response.cs`,code:`public class Response
{
    string Message { get; set; };

    bool Ok { get; set; };

    Response();

    static Response Fail();

    static Response Fail(string message);

    static Response Success();

    static Response Success(string message);
}`}),(0,a.jsx)(r,{title:`Response.cs`,code:`public class ResultHelper<T>
{
    T Data { get; set; };

    string Message { get; set; };

    bool Ok { get; set; };

    static ResultHelper<T> Fail(string message);

    static ResultHelper<T> Fail(Exception e);

    static ResultHelper<T> Success(T data);

    static ResultHelper<T> Success(T data, string message);
}`})]})})]})]})}export{d as default};