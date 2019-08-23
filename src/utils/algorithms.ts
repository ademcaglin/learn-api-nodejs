export function reverse_words(input: string): string {
    return input
        .split(".")
        .reverse()
        .join(".");
} 