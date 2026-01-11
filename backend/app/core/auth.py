import httpx
from fastapi import Depends, HTTPException, status, Request
from clerk_backend_api import AuthenticateRequestOptions
from app.core.config import settings
from app.core.clerk import clerk

class AuthUser:
    def __init__(self, user_id: str, org_id: str, org_permissions: list):
        self.user_id = user_id
        self.org_id = org_id
        self.org_permissions = org_permissions
