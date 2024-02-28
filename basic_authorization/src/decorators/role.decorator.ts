import {
  ExecutionContext,
  SetMetadata,
  createParamDecorator,
} from '@nestjs/common';
import { Role } from '../enums/role.enum';
import { Request } from 'express';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
export const RoleDecorator = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest() as Request;
    const roleHeader = request.headers['role'];

    return roleHeader;
  },
);
