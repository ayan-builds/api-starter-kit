export class AppError extends Error {
  constructor(
    message,
    {
      status = 500,
      code = 'INTERNAL_ERROR',
      details = null,
      isOperational = true,
    } = {}
  ) {
    super(message);

    this.name = this.constructor.name;
    this.status = status;
    this.code = code;
    this.details = details;
    this.isOperational = isOperational;

    Error.captureStackTrace?.(this, this.constructor);
  }
}

export class BadRequestError extends AppError {
  constructor(message = 'Bad request', details) {
    super(message, {
      status: 400,
      code: 'BAD_REQUEST',
      details,
    });
  }
}

export class UnauthorizedError extends AppError {
  constructor(message = 'Unauthorized') {
    super(message, {
      status: 401,
      code: 'UNAUTHORIZED',
    });
  }
}

export class ForbiddenError extends AppError {
  constructor(message = 'Forbidden') {
    super(message, {
      status: 403,
      code: 'FORBIDDEN',
    });
  }
}

export class NotFoundError extends AppError {
  constructor(message = 'Resource not found') {
    super(message, {
      status: 404,
      code: 'NOT_FOUND',
    });
  }
}

export class ConflictError extends AppError {
  constructor(message = 'Conflict') {
    super(message, {
      status: 409,
      code: 'CONFLICT',
    });
  }
}

export class ValidationError extends AppError {
  constructor(message = 'Validation failed', details = []) {
    super(message, {
      status: 422,
      code: 'VALIDATION_ERROR',
      details,
    });
  }
}