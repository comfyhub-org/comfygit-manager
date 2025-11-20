## Python Environment Management

- ALWAYS use uv and the commands below for python environment management! 
- NEVER try to run the system python!
- uv commands should be run in the root repo directory in order to use the repo's .venv

## Development

- `uv add <package>` - Install dependencies
- `uv run ruff check --fix` - Lint and auto-fix with ruff
- `uv pip list` - View dependencies
- `uv run <command>` - Run cli tools locally installed (e.g. uv run comfydock)

## Testing

- New tests should go under tests/ under their respective category.
- Read tests/README.md for info on how to create new integration tests.
- Try to add new tests to existing test files rather than creating new files (unless necessary)
- `uv run pytest tests/ -v` - Run all tests (full info)
- `uv run pytest <filename>` - Run specific test file

## General
Don't make any implementation overly complex. This is a one-person dev MVP project.
We are still pre-customer - any unnecessary fallbacks, unnecessary versioning, testing overkill should be avoided.
Simple, elegant, maintainable code is the goal.
We DONT want any legacy or backwards compatible code.