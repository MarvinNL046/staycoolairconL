export function formatDate(date: Date | string | undefined): string {
  if (!date) {
    return new Date().toLocaleDateString('nl-NL');
  }

  try {
    const d = new Date(date);
    if (isNaN(d.getTime())) {
      return new Date().toLocaleDateString('nl-NL');
    }
    return d.toLocaleDateString('nl-NL');
  } catch {
    return new Date().toLocaleDateString('nl-NL');
  }
}

export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
