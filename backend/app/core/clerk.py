from clerk_backend_api import Clerk
from core.config import settings

clerk = Clerk(
    bearer_auth=settings.CLERK_SECRET_KEY
)