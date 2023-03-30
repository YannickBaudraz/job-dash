export function cleanBeforeSentToFirestore(data: unknown) {
  return Object.fromEntries(
    Object.entries(data as never).filter(([, v]) => {
      const isNotUndefined = v !== undefined;
      return typeof v === 'string'
        ? isNotUndefined && v.trim() !== ''
        : isNotUndefined;
    })
  );
}
