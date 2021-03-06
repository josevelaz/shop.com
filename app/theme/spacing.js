/**
 * The available spacing.
 *
 * Here's the rough guideline.  Customize this for you usage.  It's ok to put exceptions
 * within the components themselves if they are truly exceptions.
 *
 * 0 = none    - nothing. only here to bust out of a zero-based array.
 * 1 = tiny    - 4px; elements contextually close to each other
 * 2 = smaller - 8px; for groups of closely related items or perhaps borders
 * 3 = small   - 12px;
 * 4 = medium  - 16px;
 * 5 = medium+ - 24px;
 * 6 = large   - 32px; between groups of content that aren't related?
 * 7 = huge    - 48px;
 * 8 = massive - 62px; an uncomfortable amount of whitespace
 */
export const spacing = [0, 4, 8, 12, 16, 24, 32, 48, 64]
